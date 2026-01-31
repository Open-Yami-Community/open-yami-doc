---
sidebar_position: 1
title: compileString 编译字符串
---

## compileString

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译字符串

参数 `string`: 字符串或变量访问器

参数 `defValue`: 默认值

返回值:字符串访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `string` | `string \| VariableGetter` | - | - |
| `defValue` | `string` | - | - |

### 返回值

类型: `() =&gt; string`

字符串访问器函数

### 源代码

**位置**: [第 369 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L369)

```typescript
private compileString(
		string: string | VariableGetter,
		defValue?: string
	): () => string {
		switch (typeof string) {
			case "string":
				return () => string;
			case "object": {
				const getString = Command.compileVariable(string, Attribute.GET);
				if (typeof defValue !== "string") defValue = "";
				return () => {
					const value = getString();
					switch (typeof value) {
						case "string":
							return value;
						case "number":
						case "boolean":
							return value.toString();
						default:
							return defValue!;
					}
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
