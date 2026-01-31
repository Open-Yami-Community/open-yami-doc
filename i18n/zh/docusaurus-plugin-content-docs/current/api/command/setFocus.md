---
sidebar_position: 1
title: setFocus 设置焦点
---

## setFocus

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置焦点

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ operation, element, mode, cancelable, \}` | `\{
		operation\: string;
		element\?\: ElementGetter;
		mode\?\: FocusMode;
		cancelable\?\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 5597 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5597)

```typescript
protected setFocus({
		operation,
		element,
		mode,
		cancelable,
	}: {
		operation: string;
		element?: ElementGetter;
		mode?: FocusMode;
		cancelable?: boolean;
	}): CommandFunction {
		switch (operation) {
			case "add": {
				// 补丁：2023-3-21
				if (mode === undefined) {
					mode = "control-child-buttons";
				}
				const getElement = Command.compileElement(element!);
				return () => {
					const element = getElement();
					if (element) {
						element.focusMode = mode;
						element.focusCancelable = cancelable;
						UI.addFocus(element);
					}
					return true;
				};
			}
			case "remove": {
				const getElement = Command.compileElement(element!);
				return () => {
					const element = getElement();
					if (element) {
						UI.removeFocus(element);
					}
					return true;
				};
			}
			case "remove-latest":
				return () => {
					UI.removeLatestFocus();
					return true;
				};
			case "reset":
				return () => {
					UI.resetFocuses();
					return true;
				};
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
