---
sidebar_position: 1
title: addToMap 添加物品或装备到映射表
---

## addToMap

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

添加物品或装备到映射表

参数 `asset`: 添加资产

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `asset` | `Item \| Equipment` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4601 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4601)

```typescript
private addToMap(asset: Item | Equipment): void {
    if (this.idMap[asset.id]) {
      this.idMap[asset.id]!.push(asset)
    } else {
      this.idMap[asset.id] = [asset]
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
