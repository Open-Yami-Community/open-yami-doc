---
sidebar_position: 1
title: controlDialog 控制对话框
---

## controlDialog

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

控制对话框

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

**位置**: [第 5035 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5035)

```typescript
protected controlDialog({
		element,
		operation,
	}: {
		element: ElementGetter;
		operation: string;
	}): CommandFunction {
		const method = this.controlDialog as any;
		if (!method.methodMap) {
			method.methodMap = {
				pause: "pause",
				continue: "continue",
				"print-immediately": "printImmediately",
				"print-next-page": "printNextPage",
			};
		}
		const getElement = Command.compileElement(element);
		const methodName = method.methodMap[operation];
		return () => {
			const element = getElement();
			if (element instanceof DialogBoxElement) {
				// @ts-ignore
				element[methodName]();
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
