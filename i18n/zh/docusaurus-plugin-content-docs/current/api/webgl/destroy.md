---
sidebar_position: 1
title: destroy 销毁图像纹理
---

## destroy

**类型**: `MethodDeclaration`

**所属类**: `ImageTexture`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

销毁图像纹理

### 返回值

类型: `void`

### 源代码

**位置**: [第 2296 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2296)

```typescript
public destroy(): void {
    if (!this.destroyed) {
      this.destroyed = true
      this.complete = false
      this.base.decreaseRefCount()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
