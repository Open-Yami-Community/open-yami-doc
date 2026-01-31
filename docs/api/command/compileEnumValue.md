---
sidebar_position: 1
title: compileEnumValue 编译枚举值
---

## compileEnumValue

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译枚举值

参数 `enumId`: 枚举值ID或变量访问器

返回值:枚举值访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `enumId` | `string \| VariableGetter` | - | - |

### 返回值

类型: `() =&gt; string`

枚举值访问器函数

### 源代码

**位置**: [第 400 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L400)

```typescript
private compileEnumValue(enumId: string | VariableGetter): () => string {
		switch (typeof enumId) {
			case "string": {
				const enumString = Enum.getValue(enumId);
				return () => enumString;
			}
			case "object": {
				const getString = Command.compileVariable(enumId, Attribute.STRING_GET);
				return () => getString() ?? "";
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
