---
sidebar_position: 1
title: getObjectProperty 获取对象变量
---

## getObjectProperty

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

获取对象变量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ variable, saveVariable, properties, \}` | `\{
		variable\: VariableGetter;
		saveVariable\: VariableGetter;
		properties\: Array&lt;any&gt;;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 2943 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L2943)

```typescript
protected getObjectProperty({
		variable,
		saveVariable,
		properties,
	}: {
		variable: VariableGetter;
		saveVariable: VariableGetter;
		properties: Array<any>;
	}): CommandFunction {
		const getter = Command.compileVariable(variable, Attribute.GET);
		const setter = Command.compileVariable(saveVariable, Attribute.SET);
		return () => {
			const object = getter();
			if (object !== undefined) {
				const value = properties.reduce(
					(object, property) => object[property.text],
					object
				);
				setter(value);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
