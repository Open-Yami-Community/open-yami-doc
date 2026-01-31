---
sidebar_position: 1
title: compileNumber 编译数值
---

## compileNumber

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译数值

参数 `number`: 数值或变量访问器

参数 `defValue`: 默认值

参数 `min`: 最小值

参数 `max`: 最大值

返回值:数值访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `number` | `number \| VariableGetter` | - | - |
| `defValue` | `number` | - | - |
| `min` | `number` | - | - |
| `max` | `number` | - | - |

### 返回值

类型: `() =&gt; number`

数值访问器函数

### 源代码

**位置**: [第 344 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L344)

```typescript
private compileNumber(
		number: number | VariableGetter,
		defValue?: number,
		min?: number,
		max?: number
	): () => number {
		switch (typeof number) {
			case "number":
				return () => number;
			case "object": {
				const getNumber = Command.compileVariable(number, Attribute.NUMBER_GET);
				if (typeof defValue !== "number") defValue = 0;
				return typeof min === "number" && typeof max === "number"
					? () => Math.clamp(getNumber() ?? defValue, min, max)
					: () => getNumber() ?? defValue;
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
