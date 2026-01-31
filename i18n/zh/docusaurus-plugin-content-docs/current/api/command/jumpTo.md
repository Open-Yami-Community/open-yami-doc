---
sidebar_position: 1
title: jumpTo 跳转到标签
---

## jumpTo

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

跳转到标签

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ operation, label, \}` | `\{
		operation\: string;
		label\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 4599 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4599)

```typescript
protected jumpTo({
		operation,
		label,
	}: {
		operation: string;
		label: string;
	}): CommandFunction {
		switch (operation) {
			case "jump":
			case "save-jump":
				const { commands, index } = this.stack.get();
				this.jumps.push({ operation, label, commands, index });
				return Command.skip;
			case "return":
				return () => {
					const { savedCommands, savedIndex } = CurrentEvent;
					if (savedCommands !== undefined) {
						CurrentEvent.savedCommands = undefined;
						CurrentEvent.savedIndex = undefined;
						CommandList = savedCommands;
						CommandIndex = savedIndex!;
					}
					return true;
				};
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
