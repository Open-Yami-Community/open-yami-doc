---
sidebar_position: 1
title: initialize 初始化
---

## initialize

**类型**: `MethodDeclaration`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

初始化

### 返回值

类型: `void`

### 源代码

**位置**: [第 46 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L46)

```typescript
public initialize(): void {
    // 创建容器元素
    const container = this.createContainer()

    // 创建画布元素
    const canvas = this.createCanvas()

    // 设置WebGL选项
    const map = {
      nearest: WebGLRenderingContext.prototype.NEAREST,
      linear: WebGLRenderingContext.prototype.LINEAR,
    }
    this.webglOptions.desynchronized = Data.config.webgl.desynchronized
    this.textureOptions.magFilter = map[Data.config.webgl.textureMagFilter]
    this.textureOptions.minFilter = map[Data.config.webgl.textureMinFilter]

    // 默认WebGL2(Win10 DirectX11)
    // 兼容WebGL1(Win7 DirectX9以及旧移动设备)
    GL = this.createWebGL2(canvas)
    ??   this.createWebGL1(canvas)

    // 设置画布容器元素
    GL.container = container

    // 设置画布为容器的子元素
    container.appendChild(canvas)

    // 设置WebGL属性和方法
    this.setupWebGLMethods(GL)
    this.setupWebGLProperties(GL)
  }
```

---



文档生成时间：2026/1/31 13:13:59
