---
sidebar_position: 1
title: mirrorh 水平镜像
---

## mirrorh

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

水平镜像

返回值:当前矩阵

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2790 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2790)

```typescript
public mirrorh(): this {
    this[0] = -this[0]
    this[3] = -this[3]
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
