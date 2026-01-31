---
sidebar_position: 1
title: loadInventory 加载初始角色库存
---

## loadInventory

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

加载初始角色库存

### 返回值

类型: `void`

### 源代码

**位置**: [第 651 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L651)

```typescript
private loadInventory(): void {
    const inventory = this.inventory
    const list = this.data.inventory
    const length = list.length
    // 创建初始物品和装备，避免触发获得事件
    for (let i = 0; i < length; i++) {
      const asset = list[i]
      switch (asset.type) {
        case 'item': {
          const data = Data.items[asset.id]
          if (data) {
            const item = new Item(data)
            inventory.insert(item)
            item.increase(asset.quantity)
          }
          continue
        }
        case 'equipment': {
          const data = Data.equipments[asset.id]
          if (data) {
            inventory.insert(new Equipment(data))
          }
          continue
        }
        case 'money':
          inventory.money += asset.money
          continue
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:57
