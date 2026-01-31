---
sidebar_position: 1
title: add 添加数据到列表中
---

## add

**类型**: `MethodDeclaration`

**所属类**: `CacheList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

添加数据到列表中

参数 `data`: 数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `data` | `T` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 604 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L604)

```typescript
public add(data: T): void {
    this[this.count++] = data
  }
```

---



文档生成时间：2026/1/31 13:13:59
