---
sidebar_position: 1
title: contains 判断是否包含指定数据
---

## contains

**类型**: `MethodDeclaration`

**所属类**: `CacheList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

判断是否包含指定数据

返回值:是否包含

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `data` | `T` | - | - |

### 返回值

类型: `boolean`

是否包含

### 源代码

**位置**: [第 612 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L612)

```typescript
public contains(data: T): boolean {
    const count = this.count
    for (let i = 0; i < count; i++) {
      if (this[i] === data) {
        return true
      }
    }
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:59
