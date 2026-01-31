---
sidebar_position: 1
title: getList 获取库存资产列表
---

## getList

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

获取库存资产列表

参数 `id`: 资产文件ID

返回值:物品或装备列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |

### 返回值

类型: `Array&lt;Item \| Equipment&gt; \| undefined`

物品或装备列表

### 源代码

**位置**: [第 4536 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4536)

```typescript
public getList(id: string): Array<Item | Equipment> | undefined {
    return this.idMap[id]
  }
```

---



文档生成时间：2026/1/31 13:13:58
