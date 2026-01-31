---
sidebar_position: 1
title: createElement 创建元素
---

## createElement

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

创建元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ operation, parent, uiId, presetId, \}` | `\{
		operation\: string;
		parent\?\: ElementGetter;
		uiId\?\: string;
		presetId\?\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 4644 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4644)

```typescript
protected createElement({
		operation,
		parent,
		uiId,
		presetId,
	}: {
		operation: string;
		parent?: ElementGetter;
		uiId?: string;
		presetId?: string;
	}): CommandFunction {
		switch (operation) {
			case "append-all-to-root":
				return () => {
					UI.root.appendChildren(UI.load(uiId!));
					return true;
				};
			case "append-one-to-root":
				return () => {
					try {
						UI.add(presetId!);
					} catch (error) {
						console.warn(error);
					}
					return true;
				};
			case "append-all-to-element": {
				const getElement = Command.compileElement(parent!);
				return () => {
					getElement()?.appendChildren(UI.load(uiId!));
					return true;
				};
			}
			case "append-one-to-element": {
				const getElement = Command.compileElement(parent!);
				return () => {
					try {
						getElement()?.appendChild(UI.createElement(presetId!));
					} catch (error) {
						console.warn(error);
					}
					return true;
				};
			}
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
