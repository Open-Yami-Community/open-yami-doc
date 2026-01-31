---
sidebar_position: 1
title: setObjectProperty 设置对象变量
---

## setObjectProperty

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置对象变量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ variable, valueVariable, properties, \}` | `\{
		variable\: VariableGetter;
		valueVariable\: VariableGetter;
		properties\: Array&lt;any&gt;;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 2968 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L2968)

```typescript
protected setObjectProperty({
		variable,
		valueVariable,
		properties,
	}: {
		variable: VariableGetter;
		valueVariable: VariableGetter;
		properties: Array<any>;
	}): CommandFunction {
		const getterV = Command.compileVariable(variable, Attribute.GET);
		const getter = Command.compileVariable(valueVariable, Attribute.GET);
		return () => {
			const object = getterV();
			if (object !== undefined) {
				const value = getter();
				properties.reduce((object, property) => {
					// 到最后时设置值
					if (property === properties[properties.length - 1]) {
						return (object[property.text] = value);
					} else {
						return object[property.text];
					}
				}, object);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
