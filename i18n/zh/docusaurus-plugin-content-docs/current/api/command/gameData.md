---
sidebar_position: 1
title: gameData 游戏数据
---

## gameData

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

游戏数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ operation, index, variables, \}` | `\{
		operation\: "save" \| "load" \| "delete";
		index\: number;
		variables\?\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8834 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8834)

```typescript
protected gameData({
		operation,
		index,
		variables,
	}: {
		operation: "save" | "load" | "delete";
		index: number;
		variables?: string;
	}): CommandFunction {
		switch (operation) {
			case "save": {
				const getIndex = Command.compileNumber(index, -1, -1, 32);
				const keys = variables!.split(/\s*,\s*/);
				return () => {
					const index = getIndex();
					if (index === -1) {
						return true;
					}
					const meta: AttributeMap = {};
					const event = CurrentEvent;
					const { attributes } = event;
					for (const key of keys) {
						const value = attributes[key];
						switch (typeof value) {
							case "boolean":
							case "number":
							case "string":
								meta[key] = value;
								continue;
						}
					}
					Data.saveGameData(index, meta).then(() => {
						event.continue();
					});
					return CurrentEvent.pause();
				};
			}
			case "load": {
				const getIndex = Command.compileNumber(index, -1, -1, 32);
				return () => {
					const index = getIndex();
					if (index === -1) {
						return true;
					}
					const event = CurrentEvent;
					Data.loadGameData(index).then(() => {
						event.continue();
					});
					return CurrentEvent.pause();
				};
			}
			case "delete": {
				const getIndex = Command.compileNumber(index, -1, -1, 32);
				return () => {
					const index = getIndex();
					if (index === -1) {
						return true;
					}
					const event = CurrentEvent;
					Data.deleteGameData(index).then(() => {
						event.continue();
					});
					return CurrentEvent.pause();
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
