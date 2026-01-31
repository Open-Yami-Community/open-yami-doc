---
sidebar_position: 1
title: drawPointLight 绘制点光源
---

## drawPointLight

**类型**: `MethodDeclaration`

**所属类**: `SceneLight`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

绘制点光源

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

**位置**: [第 4935 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L4935)

```typescript
private drawPointLight(projMatrix: Matrix, opacity: number): void {
    const gl = GL
    const vertices = gl.arrays[0].float32
    const r = this.range! / 2
    const ox = this.x
    const oy = this.y
    const dl = ox - r
    const dt = oy - r
    const dr = ox + r
    const db = oy + r
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
    const red = this.red * opacity / 255
    const green = this.green * opacity / 255
    const blue = this.blue * opacity / 255
    const intensity = this.intensity!
    gl.bindVertexArray(program.vao.a110)
    gl.vertexAttrib4f(program.a_LightColor, red, green, blue, intensity)
    gl.uniformMatrix3fv(program.u_Matrix, false, projMatrix)
    gl.uniform1i(program.u_LightMode, 0)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STREAM_DRAW, 0, 16)
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
  }
```

---



文档生成时间：2026/1/31 13:13:59
