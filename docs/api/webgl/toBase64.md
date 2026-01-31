---
sidebar_position: 1
title: toBase64 自适应裁剪图像并缩放到指定大小
---

## toBase64

**类型**: `MethodDeclaration`

**所属类**: `Texture`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

自适应裁剪图像并缩放到指定大小

再转换为BASE64编码

参数 `width`: 目标图像宽度

参数 `height`: 目标图像高度

返回值:BASE64

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `width` | `number` | - | - |
| `height` | `number` | - | - |

### 返回值

类型: `string`

BASE64

### 源代码

**位置**: [第 2082 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2082)

```typescript
public toBase64(width: number, height: number): string {
    const texture = new Texture()
    texture.resize(width, height)
    const tx = this.x
    const ty = this.y
    const tw = this.width
    const th = this.height
    const bw = this.base.width
    const bh = this.base.height
    let sx, sy, sw, sh
    if (width / height >= bw / bh) {
      sw = bw
      sh = Math.round(bw * height / width)
      sx = 0
      sy = bh - sh >> 1
    } else {
      sw = Math.round(bh * width / height)
      sh = bh
      sx = bw - sw >> 1
      sy = 0
    }
    const gl = this.gl
    this.clip(sx, sy, sw, sh)
    gl.reset()
    gl.bindFBO(gl.frameBuffer)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture.base.glTexture, 0)
    gl.drawImage(this, 0, 0, width, height)
    gl.unbindFBO()
    this.clip(tx, ty, tw, th)
    const imageData = texture.getImageData(0, 0, width, height)!
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')!
    context.putImageData(imageData, 0, 0)
    texture.destroy()
    return canvas.toDataURL()
  }
```

---



文档生成时间：2026/1/31 13:13:59
