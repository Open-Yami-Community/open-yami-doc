---
sidebar_position: 1
title: decreaseItems 在库存中减少物品数量(从多个物品实例中减去足够的数量)
---

## decreaseItems

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

在库存中减少物品数量(从多个物品实例中减去足够的数量)

参数 `id`: 物品文件ID

参数 `quantity`: 物品数量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |
| `quantity` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4789 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4789)

```typescript
public decreaseItems(id: string, quantity: number): void {
		const { list } = this;
		let i = list.length;
		while (--i >= 0) {
			const item = list[i];
			if (item.id === id && item instanceof Item) {
				// 查找物品并减少数量
				if (item.quantity >= quantity) {
					item.decrease(quantity);
					return;
				}
				// 如果数量不够，继续查找
				quantity -= item.quantity;
				item.decrease(item.quantity);
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
