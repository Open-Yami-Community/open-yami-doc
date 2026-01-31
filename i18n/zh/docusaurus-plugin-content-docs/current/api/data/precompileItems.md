---
sidebar_position: 1
title: precompileItems 预编译物品数据
---

## precompileItems

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

预编译物品数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 441 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L441)

```typescript
private precompileItems(): void {
    const items = Object.values(this.items) as Array<ItemFile>
    for (const item of items) {
      this.compileEvents(item, item.path)
      this.setParentItem(item)
    }
    this.inheritForEach(items, this.inheritItem)
    // 重新获取物品列表，生成属性表
    for (const item of Object.values(this.items) as Array<ItemFile>) {
      const attributes = item.attributes as unknown as Array<InitialAttribute>
      Attribute.loadEntries(
        item.attributes = {},
        attributes,
      )
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
