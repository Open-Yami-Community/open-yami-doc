---
sidebar_position: 1
title: updateMethods 更新粒子方法(根据粒子的特性来设置)
---

## updateMethods

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

更新粒子方法(根据粒子的特性来设置)

### 返回值

类型: `void`

### 源代码

**位置**: [第 2255 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2255)

```typescript
private updateMethods(): void {
    const {area, color} = this.data
    // 给不同的发射区域设置特有的方法
    switch (area.type) {
      case 'point':
        this.setStartPosition = this.setStartPositionPoint
        this.postProcessing = this.postProcessingCommon
        break
      case 'rectangle':
        this.setStartPosition = this.setStartPositionRectangle
        this.postProcessing = this.postProcessingCommon
        break
      case 'circle':
        this.setStartPosition = this.setStartPositionCircle
        this.postProcessing = this.postProcessingCommon
        break
      case 'edge':
        this.setStartPosition = this.setStartPositionEdge
        this.postProcessing = this.postProcessingEdge
        break
    }
    // 给不同的颜色模式设置特有的方法
    switch (color.mode) {
      case 'fixed':
        this.setStartColor = this.setStartColorFixed
        this.updateColor = Function.empty
        break
      case 'random':
        this.setStartColor = this.setStartColorRandom
        this.updateColor = Function.empty
        break
      case 'easing':
        this.setStartColor = this.setStartColorEasing
        this.updateColor = this.updateColorEasing
        break
      case 'texture':
        this.setStartColor = this.setStartColorTexture
        this.updateColor = Function.empty
        break
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
