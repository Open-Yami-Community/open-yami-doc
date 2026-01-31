---
sidebar_position: 1
title: setParentItem 设置父级物品的引用
---

## setParentItem

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

设置父级物品的引用

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `item` | `ItemFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 459 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L459)

```typescript
private setParentItem(item: ItemFile): void {
    if (item.inherit !== '' && item.inherit !== item.id) {
      const parent = Data.items[item.inherit]
      if (parent !== undefined) {
        item.parent = parent
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
