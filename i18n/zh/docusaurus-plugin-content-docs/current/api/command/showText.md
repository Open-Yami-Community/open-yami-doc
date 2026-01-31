---
sidebar_position: 1
title: showText 显示文本
---

## showText

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

显示文本

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ target, parameters, content, \}` | `\{
		target\: ActorGetter;
		parameters\: string;
		content\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 1546 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L1546)

```typescript
protected showText({
		target,
		parameters,
		content,
	}: {
		target: ActorGetter;
		parameters: string;
		content: string;
	}): CommandFunction {
		const getActor = Command.compileActor(target);
		const getContent = Command.compileTextContent(content);
		return () => {
			const list = EventManager.getEnabledEvents("showtext");
			const fn =
				list.length === 0
					? Command.skip
					: () => {
							CurrentEvent.targetActor = getActor();
							Command.parameters = parameters;
							Command.textContent = getContent();
							CurrentEvent.stack.push(CommandList, CommandIndex);
							for (let i = list.length - 1; i >= 1; i--) {
								CurrentEvent.stack.push(list[i], 0);
							}
							CommandList = list[0];
							CommandIndex = 0;
							return true;
					  };
			// 编译时不能确定事件已加载，因此使用运行时编译
			return (CommandList[CommandIndex - 1] = fn)();
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
