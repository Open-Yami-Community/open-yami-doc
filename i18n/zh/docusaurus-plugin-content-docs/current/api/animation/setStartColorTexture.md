---
sidebar_position: 1
title: setStartColorTexture 设置初始颜色 - 纹理采样
---

## setStartColorTexture

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置初始颜色 - 纹理采样

### 返回值

类型: `void`

### 源代码

**位置**: [第 2558 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2558)

```typescript
private setStartColorTexture(): void {
    const {color} = this
    this.colorChanged = true
    color[3] = 255
  }
```

---



文档生成时间：2026/1/31 13:13:58
