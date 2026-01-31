---
sidebar_position: 1
title: loadImage 从图像中取样
---

## loadImage

**类型**: `MethodDeclaration`

**所属类**: `Texture`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

从图像中取样

参数 `image`: HTML图像或画布元素

返回值:当前纹理

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `image` | `HTMLImageElement \| HTMLCanvasElement` | - | - |

### 返回值

类型: `Texture`

当前纹理

### 源代码

**位置**: [第 2036 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2036)

```typescript
public loadImage(image: HTMLImageElement | HTMLCanvasElement): Texture {
    // 上传空图像会被Chromium警告
    if (image.width === 0 && image.height === 0) {
      return this.resize(0, 0)
    }
    const gl = this.gl
    const base = this.base
    const format = base.format
    base.width = Math.min(image.width, gl.maxTexSize)
    base.height = Math.min(image.height, gl.maxTexSize)
    gl.bindTexture(gl.TEXTURE_2D, base.glTexture)
    gl.texImage2D(gl.TEXTURE_2D, 0, format, base.width, base.height, 0, format, gl.UNSIGNED_BYTE, image)
    return this.clip(0, 0, base.width, base.height)
  }
```

---



文档生成时间：2026/1/31 13:13:59
