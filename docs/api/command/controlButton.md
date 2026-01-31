---
sidebar_position: 1
title: controlButton 控制按钮
---

## controlButton

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

控制按钮

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

**位置**: [第 5199 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5199)

```typescript
protected controlButton({
		element,
		operation,
	}: {
		element: ElementGetter;
		operation: string;
	}): CommandFunction {
		switch (operation) {
			case "select-default":
				return () => {
					UI.selectDefaultButton();
					return true;
				};
		}
		const getElement = Command.compileElement(element);
		return () => {
			const element = getElement();
			if (element instanceof ButtonElement) {
				switch (operation) {
					case "select":
						UI.selectButton(element);
						break;
					case "hover-mode":
						element.mode = "hover";
						break;
					case "active-mode":
						element.mode = "active";
						break;
					case "normal-mode":
						element.mode = "normal";
						break;
				}
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
