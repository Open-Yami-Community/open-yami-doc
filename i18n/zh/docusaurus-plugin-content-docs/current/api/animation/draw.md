---
sidebar_position: 1
title: draw 绘制粒子的精灵图像
---

## draw

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

绘制粒子的精灵图像

参数 `vi`: 顶点数组的起始索引位置

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `vi` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2178 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2178)

```typescript
public draw(vi: number): void {
    const layer = this.layer
    const sw = layer.unitWidth
    const sh = layer.unitHeight
    const tw = layer.textureWidth
    const th = layer.textureHeight
    const ax = this.anchorX + 0.5
    const ay = this.anchorY + 0.5
    const vertices = GL.arrays[0].float32
    const colors = GL.arrays[0].uint32
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
    const sx = this.spriteX * sw
    const sy = this.spriteY * sh
    const color = this.getColorInt()
    const sl = sx / tw
    const st = sy / th
    const sr = (sx + sw) / tw
    const sb = (sy + sh) / th
    vertices[vi    ] = e
    vertices[vi + 1] = f
    vertices[vi + 2] = sl
    vertices[vi + 3] = st
    colors  [vi + 4] = color
    vertices[vi + 5] = c * B + e
    vertices[vi + 6] = d * B + f
    vertices[vi + 7] = sl
    vertices[vi + 8] = sb
    colors  [vi + 9] = color
    vertices[vi + 10] = a * R + c * B + e
    vertices[vi + 11] = b * R + d * B + f
    vertices[vi + 12] = sr
    vertices[vi + 13] = sb
    colors  [vi + 14] = color
    vertices[vi + 15] = a * R + e
    vertices[vi + 16] = b * R + f
    vertices[vi + 17] = sr
    vertices[vi + 18] = st
    colors  [vi + 19] = color
  }
```

---



文档生成时间：2026/1/31 13:13:58
