---
sidebar_position: 1
title: setItem 设置物品
---

## setItem

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置物品

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ item, operation, quantity, \}` | `\{
		item\: ItemGetter;
		operation\: "increase" \| "decrease";
		quantity\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8085 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8085)

```typescript
protected setItem({
		item,
		operation,
		quantity,
	}: {
		item: ItemGetter;
		operation: "increase" | "decrease";
		quantity: number | VariableGetter;
	}): CommandFunction {
		const getItem = Command.compileItem(item);
		switch (operation) {
			case "increase": {
				const getQuantity = Command.compileNumber(quantity);
				return () => (getItem()?.increase(getQuantity()), true);
			}
			case "decrease": {
				const getQuantity = Command.compileNumber(quantity);
				return () => (getItem()?.decrease(getQuantity()), true);
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
