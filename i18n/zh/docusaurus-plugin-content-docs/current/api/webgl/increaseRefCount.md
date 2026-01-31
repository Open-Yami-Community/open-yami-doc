---
sidebar_position: 1
title: increaseRefCount 增加引用计数
---

## increaseRefCount

**类型**: `MethodDeclaration`

**所属类**: `BaseTexture`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

增加引用计数

返回值:当前纹理

### 返回值

类型: `this`

当前纹理

### 源代码

**位置**: [第 1888 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L1888)

```typescript
public increaseRefCount(): this {
    this.refCount++
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
