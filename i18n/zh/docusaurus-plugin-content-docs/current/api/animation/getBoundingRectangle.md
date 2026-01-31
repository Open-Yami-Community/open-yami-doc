---
sidebar_position: 1
title: getBoundingRectangle 获取粒子元素的外接矩形
---

## getBoundingRectangle

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

获取粒子元素的外接矩形

返回值:外接矩形[minX, minY, maxX, maxY]

### 返回值

类型: `Float64Array`

外接矩形[minX, minY, maxX, maxY]

### 源代码

**位置**: [第 2466 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2466)

```typescript
private getBoundingRectangle(): Float64Array {
    const layer = this.layer
    const sw = layer.unitWidth
    const sh = layer.unitHeight
    const ax = this.anchorX + 0.5
    const ay = this.anchorY + 0.5
    const matrix = GL.matrix.reset()
    .translate(this.x, this.y)
    .rotate(this.rotationAngle)
    .scale(this.scaleFactor, this.scaleFactor)
    .translate(-ax * sw, -ay * sh)
    const R = sw
    const B = sh
    const a = matrix[0]
    const b = matrix[1]
    const c = matrix[3]
    const d = matrix[4]
    const e = matrix[6]
    const f = matrix[7]
    const x1 = e
    const y1 = f
    const x2 = c * B + e
    const y2 = d * B + f
    const x3 = a * R + c * B + e
    const y3 = b * R + d * B + f
    const x4 = a * R + e
    const y4 = b * R + f
    const vertices = ParticleElement.sharedFloat64Array
    vertices[0] = Math.min(x1, x2, x3, x4)
    vertices[1] = Math.min(y1, y2, y3, y4)
    vertices[2] = Math.max(x1, x2, x3, x4)
    vertices[3] = Math.max(y1, y2, y3, y4)
    return vertices
  }
```

---



文档生成时间：2026/1/31 13:13:58
