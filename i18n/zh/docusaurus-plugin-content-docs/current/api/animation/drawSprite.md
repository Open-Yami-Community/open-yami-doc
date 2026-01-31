---
sidebar_position: 1
title: drawSprite 绘制精灵图像
---

## drawSprite

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

绘制精灵图像

参数 `context`: 动画图层上下文

参数 `texture`: 精灵图纹理

参数 `light`: 光线采样模式

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `context` | `AnimationFrameContext` | - | - |
| `texture` | `ImageTexture` | - | - |
| `light` | `SpriteLightSamplingMode` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 723 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L723)

```typescript
private drawSprite(context: AnimationFrameContext, texture: ImageTexture, light?: SpriteLightSamplingMode): void {
    const gl = GL
    const vertices = gl.arrays[0].float32
    const attributes = gl.arrays[0].uint32
    const renderer = gl.batchRenderer
    const response = renderer.response
    const matrix = context.matrix
    const layer = context.layer as AnimationSpriteLayer
    const frame = context.frame as AnimationSpriteFrame
    const tint = context.tint!
    const base = texture.base
    const tw = base.width
    const th = base.height
    const sw = texture.width
    const sh = texture.height
    // 优先使用纹理的x和y值作为采样的左上角位置
    // 方便使用脚本修改(设置非网格化的采样区域)
    const sx = texture.x >= 0 ? texture.x : frame.spriteX * sw
    const sy = texture.y >= 0 ? texture.y : frame.spriteY * sh
    const L = -(sw * context.anchorX + context.pivotX)
    const T = -(sh * context.anchorY + context.pivotY)
    const R = L + sw
    const B = T + sh
    const a = matrix[0]
    const b = matrix[1]
    const c = matrix[3]
    const d = matrix[4]
    const e = matrix[6]
    const f = matrix[7]
    const x1 = a * L + c * T + e
    const y1 = b * L + d * T + f
    const x2 = a * L + c * B + e
    const y2 = b * L + d * B + f
    const x3 = a * R + c * B + e
    const y3 = b * R + d * B + f
    const x4 = a * R + c * T + e
    const y4 = b * R + d * T + f
    const sl = sx / tw
    const st = sy / th
    const sr = (sx + sw) / tw
    const sb = (sy + sh) / th
    renderer.setBlendMode(layer.blend)
    renderer.push(base.index)
    // 默认使用图层光线采样
    light = light ?? layer.light
    const vi = response[0] * 8
    const mode = AnimationPlayer.lightSamplingModes[light]
    const alpha = Math.round(context.opacity * 255)
    const param = response[1] | alpha << 8 | mode << 16
    const redGreen = tint[0] + (tint[1] << 16) + 0x00ff00ff
    const blueGray = tint[2] + (tint[3] << 16) + 0x00ff00ff
    const anchor = light !== 'anchor' ? 0 : (
      Math.round(Math.clamp(this.anchorX, 0, 1) * 0xffff)
    | Math.round(Math.clamp(this.anchorY, 0, 1) * 0xffff) << 16
    )
    // 设置顶点数据：顶点坐标，纹理坐标，纹理索引，不透明度，光照模式，色调，锚点
    vertices  [vi    ] = x1
    vertices  [vi + 1] = y1
    vertices  [vi + 2] = sl
    vertices  [vi + 3] = st
    attributes[vi + 4] = param
    attributes[vi + 5] = redGreen
    attributes[vi + 6] = blueGray
    attributes[vi + 7] = anchor
    vertices  [vi + 8] = x2
    vertices  [vi + 9] = y2
    vertices  [vi + 10] = sl
    vertices  [vi + 11] = sb
    attributes[vi + 12] = param
    attributes[vi + 13] = redGreen
    attributes[vi + 14] = blueGray
    attributes[vi + 15] = anchor
    vertices  [vi + 16] = x3
    vertices  [vi + 17] = y3
    vertices  [vi + 18] = sr
    vertices  [vi + 19] = sb
    attributes[vi + 20] = param
    attributes[vi + 21] = redGreen
    attributes[vi + 22] = blueGray
    attributes[vi + 23] = anchor
    vertices  [vi + 24] = x4
    vertices  [vi + 25] = y4
    vertices  [vi + 26] = sr
    vertices  [vi + 27] = st
    attributes[vi + 28] = param
    attributes[vi + 29] = redGreen
    attributes[vi + 30] = blueGray
    attributes[vi + 31] = anchor
  }
```

---



文档生成时间：2026/1/31 13:13:58
