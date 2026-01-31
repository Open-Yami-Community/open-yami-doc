---
sidebar_position: 1
title: createItems 在库存中创建物品实例
---

## createItems

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

在库存中创建物品实例

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

**位置**: [第 4753 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4753)

```typescript
public createItems(id: string, quantity: number): void {
		const data = Data.items[id];
		if (data && quantity > 0) {
			const item = new Item(data);
			// 插入到库存
			Item.latest = item;
			Item.increment = quantity;
			this.insert(item);
			item.increase(quantity);
			item.callEvent("itemgain");
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
