---
sidebar_position: 1
title: setupWebGLProperties 安装WebGL属性
---

## setupWebGLProperties

**类型**: `MethodDeclaration`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

安装WebGL属性

参数 `GL`: 上下文对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `GL` | `WebGL2RenderingContext` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 162 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L162)

```typescript
public setupWebGLProperties(GL: WebGL2RenderingContext): void {
    // 设置初始属性
    GL.flip = -1
    GL.alpha = 1
    GL.blend = 'normal'
    GL.matrix = new Matrix()
    GL.width = GL.drawingBufferWidth
    GL.height = GL.drawingBufferHeight
    GL.program = null!
    GL.binding = null
    GL.masking = false
    GL.depthTest = false
    GL.maxTexSize = GL.getParameter(GL.MAX_TEXTURE_SIZE)
    GL.maxTexUnits = GL.getParameter(GL.MAX_TEXTURE_IMAGE_UNITS)
    GL.ambient = {red: -1, green: -1, blue: -1}

    // 创建纹理管理器
    GL.textureManager = new TextureManager()

    // 创建反射光纹理
    GL.reflectedLightMap = new Texture({
      format: GL.RGB,
      magFilter: GL.LINEAR,
      minFilter: GL.LINEAR,
    }) as ReflectedLightTexture
    GL.reflectedLightMap.fbo = GL.createTextureFBO(GL.reflectedLightMap)
    GL.activeTexture(GL.TEXTURE0 + GL.maxTexUnits - 1)
    GL.bindTexture(GL.TEXTURE_2D, GL.reflectedLightMap.base.glTexture)
    GL.activeTexture(GL.TEXTURE0)

    // 创建直射光纹理
    GL.directLightMap = new Texture({
      format: GL.RGB,
      magFilter: GL.LINEAR,
      minFilter: GL.LINEAR,
    }) as DirectLightTexture
    GL.directLightMap.fbo = GL.createTextureFBO(GL.directLightMap)

    // 创建模板纹理(用来绘制文字)
    GL.stencilTexture = new Texture({format: GL.ALPHA})

    // 创建遮罩纹理
    GL.maskTexture = new Texture({format: GL.RGBA}) as MaskTexture
    GL.maskTexture.fbo = GL.createTextureFBO(GL.maskTexture)
    GL.maskTexture.binding = null

    // 创建临时纹理(用来替代未使用的纹理)
    // 如果着色器Sampler2D属性缺失对应位置的绑定纹理(已删除)
    // 部分Android Web控制台将输出错误警告，无论是否读取属性
    GL.tempTexture = new Texture({format: GL.ALPHA}).resize(1, 1)

    // 创建图层数组(用于排序)
    GL.layers = new Uint32Array(0x40000)

    // 创建零值数组(用完后要确保所有值归零)
    GL.zeros = new Uint32Array(0x40000)

    // 创建类型化数组，分成4个区间，每个区间共享数据缓冲区
    // 主要用于读写顶点数据，也可以共享使用来减少内存开销
    const size = 512 * 512
    if (!GL.arrays) {
      const buffer1 = new ArrayBuffer(size * 96)
      const buffer2 = new ArrayBuffer(size * 12)
      const buffer3 = new ArrayBuffer(size * 8)
      const buffer4 = new ArrayBuffer(size * 40)
      GL.arrays = {
        0: {
          uint8: new Uint8Array(buffer1, 0, size * 96),
          uint16: new Uint16Array(buffer1, 0, size * 48),
          uint32: new Uint32Array(buffer1, 0, size * 24),
          float32: new Float32Array(buffer1, 0, size * 24),
          float64: new Float64Array(buffer1, 0, size * 12),
        },
        1: {
          uint8: new Uint8Array(buffer2, 0, size * 12),
          uint16: new Uint16Array(buffer2, 0, size * 6),
          uint32: new Uint32Array(buffer2, 0, size * 3),
          float32: new Float32Array(buffer2, 0, size * 3),
          float64: new Float64Array(buffer2, 0, size * 1.5),
        },
        2: {
          uint32: new Uint32Array(buffer3, 0, size * 2),
          float32: new Float32Array(buffer3, 0, size * 2),
        },
        3: {
          uint32: new Uint32Array(buffer4, 0, size * 10),
          float32: new Float32Array(buffer4, 0, size * 10),
        },
      }
    }

    // 创建通用帧缓冲区
    GL.frameBuffer = GL.createFramebuffer()!

    // 创建通用顶点缓冲区
    GL.vertexBuffer = GL.createBuffer()!

    // 创建通用元素索引缓冲区，刚好够绘制512x512个图块
    const indices = GL.arrays[0].uint32
    for (let i = 0; i < size; i++) {
      const ei = i * 6
      const vi = i * 4
      indices[ei    ] = vi
      indices[ei + 1] = vi + 1
      indices[ei + 2] = vi + 2
      indices[ei + 3] = vi
      indices[ei + 4] = vi + 2
      indices[ei + 5] = vi + 3
    }
    GL.elementBuffer = GL.createBuffer()!
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, GL.elementBuffer)
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, indices, GL.STATIC_DRAW, 0, size * 6)
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, null)

    // 创建更新混合模式方法(闭包)
    GL.updateBlending = GL.createBlendingUpdater()

    // 创建批量渲染器
    GL.batchRenderer = new BatchRenderer(GL)

    // 创建离屏纹理(启用深度缓冲区)
    GL.offscreen = {
      enabled: false,
      current: new Texture({format: GL.RGB}) as OffscreenTexture,
      last: new Texture({format: GL.RGB}) as OffscreenTexture,
    }
    const {current, last} = GL.offscreen
    current.fbo = GL.createTextureFBO(current)
    last.fbo = GL.createTextureFBO(last)

    // 创建程序对象
    GL.imageProgram = GL.createImageProgram() as WebGLImageProgram
    GL.tileProgram = GL.createTileProgram() as WebGLTileProgram
    GL.spriteProgram = GL.createSpriteProgram() as WebGLSpriteProgram
    GL.particleProgram = GL.createParticleProgram() as WebGLParticleProgram
    GL.lightProgram = GL.createLightProgram() as WebGLLightProgram
    GL.graphicProgram = GL.createGraphicProgram() as WebGLGraphicProgram
  }
```

---



文档生成时间：2026/1/31 13:13:59
