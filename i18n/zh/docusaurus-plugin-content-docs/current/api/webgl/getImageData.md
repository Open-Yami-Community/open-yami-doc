---
sidebar_position: 1
title: getImageData 获取图像像素数据
---

## getImageData

**类型**: `MethodDeclaration`

**所属类**: `Texture`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

获取图像像素数据

参数 `x`: 水平位置

参数 `y`: 垂直位置

参数 `width`: 裁剪宽度

参数 `height`: 裁剪高度

返回值:图像像素数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |
| `width` | `number` | - | - |
| `height` | `number` | - | - |

### 返回值

类型: `ImageData \| null`

图像像素数据

### 源代码

**位置**: [第 2059 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2059)

```typescript
public getImageData(x: number, y: number, width: number, height: number): ImageData | null {
    if (this.destroyed) return null
    const gl = this.gl
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 0
    const context = canvas.getContext('2d')!
    const imageData = context.createImageData(width, height)
    const {buffer, length} = imageData.data
    const uint8 = new Uint8Array(buffer, 0, length)
    gl.bindFramebuffer(gl.FRAMEBUFFER, gl.frameBuffer)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.base.glTexture, 0)
    gl.readPixels(x, y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, uint8)
    gl.binding ? gl.bindFBO(gl.binding) : gl.unbindFBO()
    return imageData
  }
```

---



文档生成时间：2026/1/31 13:13:59
