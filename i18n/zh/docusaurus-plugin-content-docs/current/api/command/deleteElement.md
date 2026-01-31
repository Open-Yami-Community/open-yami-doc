---
sidebar_position: 1
title: deleteElement 删除元素
---

## deleteElement

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

删除元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ operation, element, \}` | `\{
		operation\: string;
		element\: ElementGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 5518 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5518)

```typescript
protected deleteElement({
		operation,
		element,
	}: {
		operation: string;
		element: ElementGetter;
	}): CommandFunction {
		switch (operation) {
			case "delete-element": {
				const getElement = Command.compileElement(element);
				return () => {
					getElement()?.destroy();
					return true;
				};
			}
			case "delete-children": {
				const getElement = Command.compileElement(element);
				return () => {
					getElement()?.clear();
					return true;
				};
			}
			case "delete-all":
				return () => {
					UI.reset();
					return true;
				};
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
