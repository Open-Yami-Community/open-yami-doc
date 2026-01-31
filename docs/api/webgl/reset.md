---
sidebar_position: 1
title: reset 重置矩阵
---

## reset

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

重置矩阵

返回值:当前矩阵

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2591 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2591)

```typescript
public reset(): this {
    this[0] = 1
    this[1] = 0
    this[3] = 0
    this[4] = 1
    this[6] = 0
    this[7] = 0
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
