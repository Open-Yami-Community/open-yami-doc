---
sidebar_position: 1
title: drawAreaLight 绘制区域光源
---

## drawAreaLight

**类型**: `MethodDeclaration`

**所属类**: `SceneLight`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

绘制区域光源

参数 `projMatrix`: 投影矩阵

参数 `opacity`: 不透明度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `projMatrix` | `Matrix` | - | - |
| `opacity` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4980 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L4980)

```typescript
private drawAreaLight(projMatrix: Matrix, opacity: number): void {
    const texture = this.texture
    if (texture?.complete === false) {
      return
    }
    const gl = GL
    const vertices = gl.arrays[0].float32
    const ox = this.x
    const oy = this.y
    const dl = ox - this.anchorOffsetX!
    const dt = oy - this.anchorOffsetY!
    const dr = dl + this.width
    const db = dt + this.height
    vertices[0] = dl
    vertices[1] = dt
    vertices[2] = 0
    vertices[3] = 0
    vertices[4] = dl
    vertices[5] = db
    vertices[6] = 0
    vertices[7] = 1
    vertices[8] = dr
    vertices[9] = db
    vertices[10] = 1
    vertices[11] = 1
    vertices[12] = dr
    vertices[13] = dt
    vertices[14] = 1
    vertices[15] = 0
    gl.blend = this.blend
    const program = gl.lightProgram.use()
    const mode = texture !== null ? 1 : 2
    const red = this.red * opacity / 255
    const green = this.green * opacity / 255
    const blue = this.blue * opacity / 255
    const matrix = gl.matrix
    .set(projMatrix)
    .rotateAt(ox, oy, this._angle)
    gl.bindVertexArray(program.vao.a110)
    gl.vertexAttrib4f(program.a_LightColor, red, green, blue, 0)
    gl.uniformMatrix3fv(program.u_Matrix, false, matrix)
    gl.uniform1i(program.u_LightMode, mode)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STREAM_DRAW, 0, 16)
    gl.bindTexture(gl.TEXTURE_2D, texture?.base.glTexture ?? null)
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
  }
```

---



文档生成时间：2026/1/31 13:13:59
