---
sidebar_position: 1
title: clear 擦除数据
---

## clear

**类型**: `MethodDeclaration`

**所属类**: `CacheList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

擦除数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 623 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L623)

```typescript
public clear(): void {
    let i = 0
    while (this[i] !== undefined) {
      this[i++] = undefined
    }
    this.count = 0
  }
```

---



文档生成时间：2026/1/31 13:13:59
