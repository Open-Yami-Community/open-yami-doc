---
sidebar_position: 1
title: removeFromMap 从映射表中移除物品或装备
---

## removeFromMap

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

从映射表中移除物品或装备

参数 `asset`: 移除对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `asset` | `Item \| Equipment` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4613 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4613)

```typescript
private removeFromMap(asset: Item | Equipment): void {
    this.idMap[asset.id]?.remove(asset)
    if (this.idMap[asset.id]?.length === 0) {
      delete this.idMap[asset.id]
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
