---
sidebar_position: 1
title: calculateElementSize 计算粒子元素大小
---

## calculateElementSize

**类型**: `MethodDeclaration`

**所属类**: `ParticleLayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

计算粒子元素大小

### 返回值

类型: `void`

### 源代码

**位置**: [第 1830 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1830)

```typescript
private calculateElementSize(): void {
    const {data, texture} = this
    if (!texture) return
    this.textureWidth = texture.width
    this.textureHeight = texture.height
    this.unitWidth = Math.floor(texture.width / data.sprite.hframes)
    this.unitHeight = Math.floor(texture.height / data.sprite.vframes)
  }
```

---



文档生成时间：2026/1/31 13:13:58
