---
sidebar_position: 1
title: setTextBox 设置文本框
---

## setTextBox

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置文本框

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ element, properties, \}` | `\{
		element\: ElementGetter;
		properties\: Array&lt;\{ key\: string; value\: any \}&gt;;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 4949 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4949)

```typescript
protected setTextBox({
		element,
		properties,
	}: {
		element: ElementGetter;
		properties: Array<{ key: string; value: any }>;
	}): CommandFunction {
		const getElement = Command.compileElement(element);
		for (const property of properties) {
			switch (property.key) {
				case "text":
					if (typeof property.value === "object") {
						property.value = Command.compileString(property.value);
					}
					continue;
				case "number":
				case "min":
				case "max":
					if (typeof property.value === "object") {
						property.value = Command.compileNumber(property.value);
					}
					continue;
			}
		}
		return () => {
			const element = getElement();
			if (element instanceof TextBoxElement) {
				for (let { key, value } of properties) {
					if (typeof value === "function") {
						value = value();
					}
					// @ts-ignore
					element[key] = value;
				}
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
