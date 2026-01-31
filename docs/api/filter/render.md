---
sidebar_position: 1
title: render 渲染角色描边
---

## render

**类型**: `MethodDeclaration`

**定义位置**: [`filter.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/filter.ts)

### 描述

渲染角色描边

### 返回值

类型: `void`

### 源代码

**位置**: [第 197 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/filter.ts#L197)

```typescript
public render(): void {
    const map = this.actorColorMap
    if (map.size === 0) return
    this.trim()
    const gl = GL
    const vertices = gl.arrays[0].float32
    gl.enable(gl.DEPTH_TEST)
    // 按反向渲染顺序绘制描边
    const actors = Scene.visibleActors
    for (let i = actors.count - 1; i >= 0; i--) {
      const actor = actors[i]!
      if (map.has(actor) === false) {
        continue
      }
      const {active, animation} = actor
      if (active === false || animation === null) {
        continue
      }
      const {contexts} = animation
      const {count} = contexts
      for (const {ox, oy} of this.offsets) {
        let color
        if (ox === 0 && oy === 0) {
          gl.depthFunc(gl.ALWAYS)
          color = this.transparentColorArray
        } else {
          gl.depthFunc(gl.NOTEQUAL)
          color = map.get(actor)!
        }
        const projMatrix = gl.matrix.project(
          gl.flip,
          Camera.width,
          Camera.height,
        ).translate(
          ox - Camera.scrollLeft,
          oy - Camera.scrollTop,
        )
        for (let i = 0; i < count; i++) {
          const context = contexts[i]!
          const {layer} = context
          if (layer.class === 'sprite' &&
            context.frame !== null) {
            const key = layer.sprite
            const texture = animation.getTexture(key)
            if (texture) {
              const matrix = context.matrix
              const frame = context.frame as AnimationSpriteFrame
              const base = texture.base
              const tw = base.width
              const th = base.height
              const sw = texture.width
              const sh = texture.height
              const sx = frame.spriteX * sw
              const sy = frame.spriteY * sh
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
              vertices[0] = x1
              vertices[1] = y1
              vertices[2] = sl
              vertices[3] = st
              vertices[4] = x2
              vertices[5] = y2
              vertices[6] = sl
              vertices[7] = sb
              vertices[8] = x3
              vertices[9] = y3
              vertices[10] = sr
              vertices[11] = sb
              vertices[12] = x4
              vertices[13] = y4
              vertices[14] = sr
              vertices[15] = st
              const program = gl.imageProgram.use()
              gl.bindVertexArray(program.vao.a110)
              gl.vertexAttrib1f(program.a_Opacity, 1)
              gl.uniformMatrix3fv(program.u_Matrix, false, projMatrix)
              gl.uniform1i(program.u_LightMode, 0)
              gl.uniform1i(program.u_ColorMode, 1)
              gl.uniform4fv(program.u_Color, color)
              gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STREAM_DRAW, 0, 16)
              gl.bindTexture(gl.TEXTURE_2D, base.glTexture)
              gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
            }
          }
        }
      }
    }
    gl.clear(gl.DEPTH_BUFFER_BIT)
    gl.disable(gl.DEPTH_TEST)
  }
```

---



文档生成时间：2026/1/31 13:13:59
