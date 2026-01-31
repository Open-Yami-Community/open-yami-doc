---
sidebar_position: 1
title: setText 设置文本
---

## setText

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置文本

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

**位置**: [第 4879 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4879)

```typescript
protected setText({
		element,
		properties,
	}: {
		element: ElementGetter;
		properties: Array<{ key: string; value: any }>;
	}): CommandFunction {
		const getElement = Command.compileElement(element);
		const variables: Array<{ key: string; value: any }> = [];
		const constants: Array<any> = [];
		for (const property of properties) {
			switch (property.key) {
				case "content": {
					const getter = Command.compileTextContent(property.value);
					// @ts-ignore
					if (!getter.constant) {
						variables.push({
							key: property.key,
							value: getter,
						});
						continue;
					}
					// 如果内容是常量，进入默认分支
				}
				default:
					constants.push(property);
					continue;
			}
		}
		// 对单属性变量进行优化
		if (variables.length === 1 && constants.length === 0) {
			const { key, value } = variables[0];
			return () => {
				const element = getElement();
				if (element instanceof TextElement) {
					// @ts-ignore
					element[key] = value();
				}
				return true;
			};
		}
		// 对单属性常量进行优化
		if (variables.length === 0 && constants.length === 1) {
			const { key, value } = constants[0];
			return () => {
				const element = getElement();
				if (element instanceof TextElement) {
					// @ts-ignore
					element[key] = value;
				}
				return true;
			};
		}
		return () => {
			const element = getElement();
			if (element instanceof TextElement) {
				for (const property of variables) {
					// @ts-ignore
					element[property.key] = property.value();
				}
				for (const property of constants) {
					// @ts-ignore
					element[property.key] = property.value;
				}
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
