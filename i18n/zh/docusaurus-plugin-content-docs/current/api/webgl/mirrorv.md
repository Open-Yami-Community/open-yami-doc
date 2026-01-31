---
sidebar_position: 1
title: mirrorv 垂直镜像
---

## mirrorv

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

垂直镜像

返回值:当前矩阵

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2800 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2800)

```typescript
public mirrorv(): this {
    this[1] = -this[1]
    this[4] = -this[4]
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
