---
sidebar_position: 1
title: createWebGL1 创建WebGL1上下文
---

## createWebGL1

**类型**: `MethodDeclaration`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

创建WebGL1上下文

参数 `canvas`: 画布元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `canvas` | `HTMLCanvasElement` | - | - |

### 返回值

类型: `WebGL2RenderingContext`

### 源代码

**位置**: [第 110 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L110)

```typescript
private createWebGL1(canvas: HTMLCanvasElement): WebGL2RenderingContext {
    const webgl = canvas.getContext('webgl', this.webglOptions) as WebGLRenderingContext | null
      if (!webgl) {
        throw new Error('Failed to get webgl context')
      }

      // 获取元素索引 32 位无符号整数扩展
      webgl.getExtension('OES_element_index_uint')

      // 获取顶点数组对象扩展
      const vertex_array_object = webgl.getExtension('OES_vertex_array_object')!
      webgl.createVertexArray = vertex_array_object.createVertexArrayOES.bind(vertex_array_object)
      webgl.deleteVertexArray = vertex_array_object.deleteVertexArrayOES.bind(vertex_array_object)
      webgl.isVertexArray = vertex_array_object.isVertexArrayOES.bind(vertex_array_object)
      webgl.bindVertexArray = vertex_array_object.bindVertexArrayOES.bind(vertex_array_object)

      // 获取最小和最大混合模式扩展
      const blend_minmax = webgl.getExtension('EXT_blend_minmax')!
      webgl.MIN = blend_minmax.MIN_EXT
      webgl.MAX = blend_minmax.MAX_EXT

      // 更新缓冲数据
      const bufferData = WebGLRenderingContext.prototype.bufferData as (target: GLenum, srcData: Uint8Array, usage: GLenum) => void
      WebGLRenderingContext.prototype.bufferData = function (target: GLenum, srcData: Uint8Array, usage: GLenum, srcOffset: GLuint, length?: GLuint): void {
        if (length !== undefined) {
          length *= srcData.BYTES_PER_ELEMENT
          srcData = new Uint8Array(srcData.buffer, srcOffset, length)
        }
        return bufferData.call(this, target, srcData, usage)
      }

      // 获取图像像素数据
      const pixelCanvas = Object.assign(document.createElement('canvas'), {width: 0, height: 0})
      const context2d = pixelCanvas.getContext('2d')!
      const texSubImage2D = WebGLRenderingContext.prototype.texSubImage2D
      WebGLRenderingContext.prototype.texSubImage2D = function (target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | HTMLImageElement | null): void {
        let data: Uint8ClampedArray | null = null
        if (pixels instanceof HTMLImageElement) {
          pixelCanvas.width = pixels.width
          pixelCanvas.height = pixels.height
          context2d.drawImage(pixels, 0, 0)
          data = context2d.getImageData(0, 0, pixels.width, pixels.height).data
        }
        texSubImage2D.call(this, target, level, xoffset, yoffset, width, height, format, type, data)
      }
      return webgl as WebGL2RenderingContext
  }
```

---



文档生成时间：2026/1/31 13:13:59
