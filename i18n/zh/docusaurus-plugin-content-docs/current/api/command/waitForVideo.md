---
sidebar_position: 1
title: waitForVideo 等待视频结束
---

## waitForVideo

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

等待视频结束

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ element, \}` | `\{
		element\: ElementGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 5361 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5361)

```typescript
protected waitForVideo({
		element,
	}: {
		element: ElementGetter;
	}): CommandFunction {
		const getElement = Command.compileElement(element);
		return () => {
			const element = getElement();
			if (element instanceof VideoElement && element.state !== "ended") {
				const event = CurrentEvent;
				element.onEnded(() => {
					event.continue();
				});
				return CurrentEvent.pause();
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
