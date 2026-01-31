---
sidebar_position: 1
title: updateSliceData 更新图像切片数据
---

## updateSliceData

**类型**: `MethodDeclaration`

**所属类**: `ImageTexture`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

更新图像切片数据

参数 `width`: 绘制区域宽度

参数 `height`: 绘制区域高度

参数 `clip`: 图像裁剪区域

参数 `border`: 切片边框宽度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `width` | `number` | - | - |
| `height` | `number` | - | - |
| `clip` | `ImageClip` | - | - |
| `border` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2192 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2192)

```typescript
public updateSliceData(width: number, height: number, clip: ImageClip, border: number): void {
    if (!this.complete) return
    const {min, max} = Math
    const [cx, cy, cw, ch] = clip
    const B = min(border, cw / 2, ch / 2)
    const W = max(cw - B * 2, 0)
    const H = max(ch - B * 2, 0)
    const w = max(width - B * 2, 0)
    const h = max(height - B * 2, 0)
    let l, r, t, b
    if (w > 0) {
      l = B
      r = B
    } else {
      l = min(B, width)
      r = width - l
    }
    if (h > 0) {
      t = B
      b = B
    } else {
      t = min(B, height)
      b = height - t
    }

    if (!this.sliceClip) {
      // 首次调用时创建相关数组
      this.sliceClip = new Uint32Array(4)
      this.sliceVertices = new Float32Array(9 * 16)
      this.sliceThresholds = new Float32Array(9 * 4)

      // 绘制切片图像需要使用临近采样
      const {gl} = this
      this.base.magFilter = gl.NEAREST
      this.base.minFilter = gl.NEAREST
      gl.bindTexture(gl.TEXTURE_2D, this.base.glTexture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
    }
    const bw = this.base.width
    const bh = this.base.height
    const vertices = this.sliceVertices!
    const thresholds = this.sliceThresholds!
    let vi = 0
    let ti = 0

    // 设置切片的顶点数据
    const setVertices = (sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void => {
      // 如果是无效顶点数据，返回
      if (sw * sh * dw * dh === 0) return
      const dl = dx
      const dt = dy
      const dr = dx + dw
      const db = dy + dh
      const sl = (cx + sx) / bw
      const st = (cy + sy) / bh
      const sr = (cx + sx + dw) / bw
      const sb = (cy + sy + dh) / bh
      vertices[vi    ] = dl
      vertices[vi + 1] = dt
      vertices[vi + 2] = sl
      vertices[vi + 3] = st
      vertices[vi + 4] = dl
      vertices[vi + 5] = db
      vertices[vi + 6] = sl
      vertices[vi + 7] = sb
      vertices[vi + 8] = dr
      vertices[vi + 9] = db
      vertices[vi + 10] = sr
      vertices[vi + 11] = sb
      vertices[vi + 12] = dr
      vertices[vi + 13] = dt
      vertices[vi + 14] = sr
      vertices[vi + 15] = st
      thresholds[ti    ] = sl
      thresholds[ti + 1] = st
      thresholds[ti + 2] = sw / bw
      thresholds[ti + 3] = sh / bh
      vi += 16
      ti += 4
    }

    // 创建顶点数据
    const BW = B + W
    const BH = B + H
    const lw = l + w
    const th = t + h
    setVertices(B, B, W, H, l, t, w, h)
    setVertices(0, 0, B, B, 0, 0, l, t)
    setVertices(B, 0, W, B, l, 0, w, t)
    setVertices(BW, 0, B, B, lw, 0, r, t)
    setVertices(0, B, B, H, 0, t, l, h)
    setVertices(BW, B, B, H, lw, t, r, h)
    setVertices(0, BH, B, B, 0, th, l, b)
    setVertices(B, BH, W, B, l, th, w, b)
    setVertices(BW, BH, B, B, lw, th, r, b)
    Array.fill(this.sliceClip as any, clip)
    this.sliceWidth = width
    this.sliceHeight = height
    this.sliceBorder = border
    this.sliceCount = vi / 16
  }
```

---



文档生成时间：2026/1/31 13:13:59
