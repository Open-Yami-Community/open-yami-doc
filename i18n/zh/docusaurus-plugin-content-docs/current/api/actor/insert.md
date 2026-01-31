---
sidebar_position: 1
title: insert 插入物品或装备到库存中的空位置
---

## insert

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

插入物品或装备到库存中的空位置

参数 `asset`: 插入资产

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `asset` | `Item \| Equipment` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4559 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4559)

```typescript
public insert(asset: Item | Equipment): void {
    if (asset.parent === null) {
      // 将物品插入到空槽位
      let i = this.pointer
      const {list} = this
      while (list[i]?.order === i) {i++}
      list.splice(i, 0, asset)
      asset.order = i
      asset.parent = this
      // 将物品添加到映射表
      this.addToMap(asset)
      // 设置空槽位起始查找位置
      this.pointer = i + 1
      this.version++
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
