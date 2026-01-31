---
sidebar_position: 1
title: useInventory 使用指定全局角色的库存
---

## useInventory

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

使用指定全局角色的库存

参数 `inventory`: 全局角色的库存

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `inventory` | `Inventory` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1150 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1150)

```typescript
public useInventory(inventory: Inventory): void {
		if (this.inventory !== inventory) {
			if (!this.savedInventory) {
				this.savedInventory = this.inventory;
			}
			this.inventory = inventory;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
