---
sidebar_position: 1
title: independent 独立执行
---

## independent

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

独立执行

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ commands, \}` | `\{
		commands\: CommandDataList;
	\}` | - | - |

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 3481 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L3481)

```typescript
protected independent({
		commands,
	}: {
		commands: CommandDataList;
	}): CommandFunction | null {
		if (commands.length === 0) {
			return null;
		}
		const compiledCommands = Command.compileIndependent(commands);
		compiledCommands.path = commands.path = this.stack[0].path;
		compiledCommands.type = "independent";
		return () => {
			const event = new EventHandler(compiledCommands);
			event.inheritEventContext(CurrentEvent);
			EventHandler.call(event);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
