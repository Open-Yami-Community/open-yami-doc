---
sidebar_position: 1
title: clear 擦除纹理中的像素
---

## clear

**类型**: `MethodDeclaration`

**所属类**: `Texture`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

擦除纹理中的像素

参数 `red`: 默认红色

参数 `green`: 默认绿色

参数 `blue`: 默认蓝色

参数 `alpha`: 默认不透明度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `red` | `number` | - | n0 |
| `green` | `number` | - | n0 |
| `blue` | `number` | - | n0 |
| `alpha` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2005 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2005)

```typescript
public clear(red: number = 0, green: number = 0, blue: number = 0, alpha: number = 0): void {
    const gl = this.gl
    gl.bindFBO(gl.frameBuffer)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.base.glTexture, 0)
    gl.clearColor(red, green, blue, alpha)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.unbindFBO()
  }
```

---



文档生成时间：2026/1/31 13:13:59
