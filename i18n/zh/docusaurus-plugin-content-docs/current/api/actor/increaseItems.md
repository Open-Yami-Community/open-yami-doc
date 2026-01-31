---
sidebar_position: 1
title: increaseItems 在库存中增加物品数量(如果找不到物品，新建一个实例)
---

## increaseItems

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

在库存中增加物品数量(如果找不到物品，新建一个实例)

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

**位置**: [第 4771 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4771)

```typescript
public increaseItems(id: string, quantity: number): void {
		const item = this.get(id);
		// 如果存在该物品，则增加数量，否则创建物品
		if (item instanceof Item) {
			Item.latest = item;
			Item.increment = quantity;
			item.increase(quantity);
			item.callEvent("itemgain");
		} else {
			this.createItems(id, quantity);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
