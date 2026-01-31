---
sidebar_position: 1
title: setElement 设置元素
---

## setElement

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ element, operation, \}` | `\{
		element\: ElementGetter;
		operation\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 5381 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5381)

```typescript
protected setElement({
		element,
		operation,
	}: {
		element: ElementGetter;
		operation: string;
	}): CommandFunction {
		const getElement = Command.compileElement(element);
		switch (operation) {
			case "hide":
				return () => {
					getElement()?.hide();
					return true;
				};
			case "show":
				return () => {
					getElement()?.show();
					return true;
				};
			case "disable-pointer-events":
				return () => {
					const element = getElement();
					if (element) {
						element.pointerEvents = "disabled";
					}
					return true;
				};
			case "enable-pointer-events":
				return () => {
					const element = getElement();
					if (element) {
						element.pointerEvents = "enabled";
					}
					return true;
				};
			case "skip-pointer-events":
				return () => {
					const element = getElement();
					if (element) {
						element.pointerEvents = "skipped";
					}
					return true;
				};
			case "move-to-first":
				return () => {
					getElement()?.moveToIndex(0);
					return true;
				};
			case "move-to-last":
				return () => {
					getElement()?.moveToIndex(-1);
					return true;
				};
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
