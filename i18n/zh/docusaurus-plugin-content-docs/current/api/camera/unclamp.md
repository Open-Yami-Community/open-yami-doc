---
sidebar_position: 1
title: unclamp 接触限制范围
---

## unclamp

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

接触限制范围

### 返回值

类型: `void`

### 源代码

**位置**: [第 199 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L199)

```typescript
public unclamp(): void {
    this.clampedLeft = Infinity
    this.clampedTop = Infinity
    this.clampedRight = Infinity
    this.clampedBottom = Infinity
  }
```

---



文档生成时间：2026/1/31 13:13:58
