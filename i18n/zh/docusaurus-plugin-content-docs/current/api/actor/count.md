---
sidebar_position: 1
title: count 查找指定的物品或装备数量
---

## count

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

查找指定的物品或装备数量

参数 `id`: 物品或装备的文件ID

返回值:资产的数量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |

### 返回值

类型: `number`

资产的数量

### 源代码

**位置**: [第 4714 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4714)

```typescript
public count(id: string): number {
    const list = this.getList(id)
    if (!list) return 0
    let count = 0
    for (const asset of list) {
      count += asset instanceof Item ? asset.quantity : 1
    }
    return count
  }
```

---



文档生成时间：2026/1/31 13:13:58
