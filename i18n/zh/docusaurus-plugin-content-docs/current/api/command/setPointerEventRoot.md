---
sidebar_position: 1
title: setPointerEventRoot 设置指针事件根元素
---

## setPointerEventRoot

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置指针事件根元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ operation, element, \}` | `\{
		operation\: string;
		element\?\: ElementGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 5550 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5550)

```typescript
protected setPointerEventRoot({
		operation,
		element,
	}: {
		operation: string;
		element?: ElementGetter;
	}): CommandFunction {
		// 补丁：2023-3-19
		if (operation === "set") {
			operation = "add";
		}
		switch (operation) {
			case "add": {
				const getElement = Command.compileElement(element!);
				return () => {
					const element = getElement();
					if (element) {
						UI.addPointerEventRoot(element);
					}
					return true;
				};
			}
			case "remove": {
				const getElement = Command.compileElement(element!);
				return () => {
					const element = getElement();
					if (element) {
						UI.removePointerEventRoot(element);
					}
					return true;
				};
			}
			case "remove-latest":
				return () => {
					UI.removeLatestPointerEventRoot();
					return true;
				};
			case "reset":
				return () => {
					UI.resetPointerEventRoots();
					return true;
				};
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
