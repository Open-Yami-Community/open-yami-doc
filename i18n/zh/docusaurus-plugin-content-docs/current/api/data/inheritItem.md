---
sidebar_position: 1
title: inheritItem 继承父级物品的数据
---

## inheritItem

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

继承父级物品的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `item` | `ItemFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 469 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L469)

```typescript
private inheritItem(item: ItemFile): void {
    if (item.parent) {
      Data.mergeArrayByProperty(item.attributes as any, item.parent.attributes as any, 'key')
      Object.setPrototypeOf(item.events, item.parent.events)
      Data.mergeScripts(item.scripts, item.parent.scripts)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
