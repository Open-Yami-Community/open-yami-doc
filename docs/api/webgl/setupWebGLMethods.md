---
sidebar_position: 1
title: setupWebGLMethods 安装WebGL方法
---

## setupWebGLMethods

**类型**: `MethodDeclaration`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

安装WebGL方法

参数 `GL`: 上下文对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `GL` | `WebGL2RenderingContext` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 305 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L305)

```typescript
private setupWebGLMethods(GL: WebGL2RenderingContext): void {
    // WebGL上下文方法 - 创建程序对象
    GL.createProgramWithShaders = function (vshader: string, fshader: string): WebGLProgram {
      const vertexShader = this.loadShader(this.VERTEX_SHADER, vshader)
      const fragmentShader = this.loadShader(this.FRAGMENT_SHADER, fshader)
      if (!vertexShader || !fragmentShader) {
        throw new Error('Failed to load shaders')
      }
      const program = this.createProgram()
      if (!program) {
        throw new Error('Failed to create program')
      }
      this.attachShader(program, vertexShader)
      this.attachShader(program, fragmentShader)
      this.linkProgram(program)
      if (!this.getProgramParameter(program, this.LINK_STATUS)) {
        const error = this.getProgramInfoLog(program)
        this.deleteProgram(program)
        this.deleteShader(fragmentShader)
        this.deleteShader(vertexShader)
        throw new Error(`Failed to link program: ${error}`)
      }
      return program
    }

    // WebGL上下文方法 - 加载着色器
    GL.loadShader = function (type: number, source: string): WebGLShader {
      const shader = this.createShader(type)
      if (!shader) {
        throw new Error('Failed to create shader')
      }
      this.shaderSource(shader, source)
      this.compileShader(shader)
      if (!this.getShaderParameter(shader, this.COMPILE_STATUS)) {
        const error = this.getShaderInfoLog(shader)
        this.deleteShader(shader)
        console.error(`Failed to compile shader: ${error}`)
      }
      return shader
    }

    // WebGL上下文方法 - 创建图像程序
    GL.createImageProgram = function (): WebGLImageProgram {
      const program = this.createProgramWithShaders(
        `
        attribute   vec2        a_Position;
        attribute   vec2        a_TexCoord;
        attribute   float       a_Opacity;
        uniform     float       u_Flip;
        uniform     mat3        u_Matrix;
        uniform     vec3        u_Ambient;
        uniform     int         u_LightMode;
        uniform     vec2        u_LightCoord;
        uniform     vec4        u_LightTexSize;
        uniform     sampler2D   u_LightSampler;
        varying     vec2        v_TexCoord;
        varying     vec3        v_LightColor;
        varying     float       v_Opacity;

        // 获取光照颜色系数
        vec3 getLightColor() {
          if (u_LightMode == 0) {
            // 光线采样：原始图像
            return vec3(1.0, 1.0, 1.0);
          }
          if (u_LightMode == 1) {
            // 光线采样：全局采样
            return vec3(
              gl_Position.x / u_LightTexSize.x + u_LightTexSize.z,
              gl_Position.y / u_LightTexSize.y * u_Flip + u_LightTexSize.w,
              -1.0
            );
          }
          if (u_LightMode == 2) {
            // 光线采样：锚点采样
            vec2 anchorCoord = (u_Matrix * vec3(u_LightCoord, 1.0)).xy;
            vec2 lightCoord = vec2(
              anchorCoord.x / u_LightTexSize.x + u_LightTexSize.z,
              anchorCoord.y / u_LightTexSize.y * u_Flip + u_LightTexSize.w
            );
            return texture2D(u_LightSampler, lightCoord).rgb;
          }
          if (u_LightMode == 3) {
            // 光线采样：环境光
            return u_Ambient;
          }
        }

        void main() {
          gl_Position.xyw = u_Matrix * vec3(a_Position, 1.0);
          v_TexCoord = a_TexCoord;
          v_LightColor = getLightColor();
          v_Opacity = a_Opacity;
        }
        `,
        `
        precision   highp       float;
        varying     vec2        v_TexCoord;
        varying     vec3        v_LightColor;
        uniform     vec2        u_Viewport;
        uniform     int         u_Masking;
        varying     float       v_Opacity;
        uniform     float       u_Alpha;
        uniform     int         u_ColorMode;
        uniform     vec4        u_Color;
        uniform     vec4        u_Tint;
        uniform     vec4        u_Repeat;
        uniform     sampler2D   u_Sampler;
        uniform     sampler2D   u_MaskSampler;
        uniform     sampler2D   u_LightSampler;

        // 获取光照颜色系数(全局采样)
        vec3 getLightColor() {
          if (v_LightColor.z != -1.0) return v_LightColor;
          return texture2D(u_LightSampler, v_LightColor.xy).rgb;
        }

        void main() {
          if (u_ColorMode == 0) {
            // 颜色模式：纹理采样 + 色调
            gl_FragColor = texture2D(u_Sampler, fract(v_TexCoord));
            if (gl_FragColor.a == 0.0) discard;
            gl_FragColor.rgb = gl_FragColor.rgb * (1.0 - u_Tint.a) + u_Tint.rgb +
            dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114)) * u_Tint.a;
          } else if (u_ColorMode == 1) {
            // 颜色模式：指定颜色
            float alpha = texture2D(u_Sampler, v_TexCoord).a;
            if (alpha == 0.0) discard;
            gl_FragColor = vec4(u_Color.rgb, u_Color.a * alpha);
          } else if (u_ColorMode == 2) {
            // 颜色模式：纹理采样 + 切片
            vec2 uv = vec2(
              mod(v_TexCoord.x - u_Repeat.x, u_Repeat.z) + u_Repeat.x,
              mod(v_TexCoord.y - u_Repeat.y, u_Repeat.w) + u_Repeat.y
            );
            gl_FragColor = texture2D(u_Sampler, uv);
            if (gl_FragColor.a == 0.0) discard;
            gl_FragColor.rgb = gl_FragColor.rgb * (1.0 - u_Tint.a) + u_Tint.rgb +
            dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114)) * u_Tint.a;
          }
          gl_FragColor.rgb *= getLightColor();
          gl_FragColor.a *= v_Opacity * u_Alpha;
          if (u_Masking == 1) {
            vec2 fragCoord = vec2(gl_FragCoord.x, (u_Viewport.y - gl_FragCoord.y));
            gl_FragColor.a *= texture2D(u_MaskSampler, fragCoord / u_Viewport).a;
          }
        }
        `,
      ) as WebGLImageProgram
      this.useProgram(program)

      // 顶点着色器属性
      const a_Position = this.getAttribLocation(program, 'a_Position')
      const a_TexCoord = this.getAttribLocation(program, 'a_TexCoord')
      const a_Opacity = this.getAttribLocation(program, 'a_Opacity')
      const u_Flip = this.getUniformLocation(program, 'u_Flip')
      const u_Matrix = this.getUniformLocation(program, 'u_Matrix')!
      const u_Ambient = this.getUniformLocation(program, 'u_Ambient')!
      const u_LightMode = this.getUniformLocation(program, 'u_LightMode')!
      const u_LightCoord = this.getUniformLocation(program, 'u_LightCoord')!
      const u_LightTexSize = this.getUniformLocation(program, 'u_LightTexSize')!
      // 设置光线采样器指向最后一个纹理
      this.uniform1i(this.getUniformLocation(program, 'u_LightSampler'), this.maxTexUnits - 1)

      // 片元着色器属性
      const u_Viewport = this.getUniformLocation(program, 'u_Viewport')!
      const u_Masking = this.getUniformLocation(program, 'u_Masking')!
      const u_Alpha = this.getUniformLocation(program, 'u_Alpha')!
      const u_ColorMode = this.getUniformLocation(program, 'u_ColorMode')!
      const u_Color = this.getUniformLocation(program, 'u_Color')!
      const u_Tint = this.getUniformLocation(program, 'u_Tint')!
      const u_Repeat = this.getUniformLocation(program, 'u_Repeat')!
      const u_MaskSampler = this.getUniformLocation(program, 'u_MaskSampler')!

      // 创建顶点数组对象
      const vao = this.createVertexArray() as WebGLVertexArrayObjectImage
      this.bindVertexArray(vao)
      this.enableVertexAttribArray(a_Position)
      this.enableVertexAttribArray(a_TexCoord)
      this.enableVertexAttribArray(a_Opacity)
      this.bindBuffer(this.ARRAY_BUFFER, this.vertexBuffer)
      this.vertexAttribPointer(a_Position, 2, this.FLOAT, false, 20, 0)
      this.vertexAttribPointer(a_TexCoord, 2, this.FLOAT, false, 20, 8)
      this.vertexAttribPointer(a_Opacity, 1, this.FLOAT, false, 20, 16)
      this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, this.elementBuffer)

      // 创建顶点数组对象 - 属性[110]
      vao.a110 = this.createVertexArray()!
      this.bindVertexArray(vao.a110)
      this.enableVertexAttribArray(a_Position)
      this.enableVertexAttribArray(a_TexCoord)
      this.bindBuffer(this.ARRAY_BUFFER, this.vertexBuffer)
      this.vertexAttribPointer(a_Position, 2, this.FLOAT, false, 16, 0)
      this.vertexAttribPointer(a_TexCoord, 2, this.FLOAT, false, 16, 8)
      this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, this.elementBuffer)

      // 使用程序对象
      const use = () => {
        if (this.program !== program) {
          this.program = program
          this.useProgram(program)
        }
        if (program.flip !== this.flip) {
          program.flip = this.flip
          this.uniform1f(u_Flip, program.flip)
        }
        if (program.alpha !== this.alpha) {
          program.alpha = this.alpha
          this.uniform1f(u_Alpha, program.alpha)
        }
        if (program.masking !== this.masking) {
          program.masking = this.masking
          if (this.masking) {
            this.uniform1i(u_Masking, 1)
            this.uniform1i(u_MaskSampler, 1)
            this.activeTexture(this.TEXTURE1)
            this.bindTexture(this.TEXTURE_2D, this.maskTexture.base.glTexture)
            this.activeTexture(this.TEXTURE0)
          } else {
            this.uniform1i(u_Masking, 0)
            this.uniform1i(u_MaskSampler, 0)
            this.activeTexture(this.TEXTURE1)
            this.bindTexture(this.TEXTURE_2D, null)
            this.activeTexture(this.TEXTURE0)
          }
        }
        if (this.masking) {
          this.uniform2f(u_Viewport, this.width, this.height)
        }
        this.updateBlending()
        return program
      }

      // 保存程序对象
      program.use = use
      program.vao = vao
      program.flip = 0
      program.alpha = 0
      program.masking = false
      program.a_Position = a_Position
      program.a_TexCoord = a_TexCoord
      program.a_Opacity = a_Opacity
      program.u_Matrix = u_Matrix
      program.u_Ambient = u_Ambient
      program.u_LightMode = u_LightMode
      program.u_LightCoord = u_LightCoord
      program.u_LightTexSize = u_LightTexSize
      program.u_Viewport = u_Viewport
      program.u_Masking = u_Masking
      program.u_MaskSampler = u_MaskSampler
      program.u_ColorMode = u_ColorMode
      program.u_Color = u_Color
      program.u_Tint = u_Tint
      program.u_Repeat = u_Repeat
      return program
    }

    // WebGL上下文方法 - 创建图块程序
    GL.createTileProgram = function (): WebGLTileProgram {
      const program = this.createProgramWithShaders(
        `
        attribute   vec2        a_Position;
        attribute   vec2        a_TexCoord;
        attribute   float       a_TexIndex;
        uniform     float       u_Flip;
        uniform     mat3        u_Matrix;
        uniform     vec3        u_Ambient;
        uniform     int         u_LightMode;
        uniform     vec4        u_LightTexSize;
        uniform     sampler2D   u_LightSampler;
        varying     float       v_TexIndex;
        varying     vec2        v_TexCoord;
        varying     vec3        v_LightColor;

        // 获取光照颜色系数
        vec3 getLightColor() {
          if (u_LightMode == 0) {
            // 光线采样：原始图像
            return vec3(1.0, 1.0, 1.0);
          }
          if (u_LightMode == 1) {
            // 光线采样：全局采样
            return vec3(
              gl_Position.x / u_LightTexSize.x + u_LightTexSize.z,
              gl_Position.y / u_LightTexSize.y * u_Flip + u_LightTexSize.w,
              -1.0
            );
          }
          if (u_LightMode == 2) {
            // 光线采样：环境光
            return u_Ambient;
          }
        }

        void main() {
          gl_Position.xyw = u_Matrix * vec3(a_Position, 1.0);
          v_TexCoord = a_TexCoord;
          v_TexIndex = a_TexIndex;
          v_LightColor = getLightColor();
        }
        `,
        `
        precision   highp       float;
        varying     float       v_TexIndex;
        varying     vec2        v_TexCoord;
        varying     vec3        v_LightColor;
        uniform     float       u_Alpha;
        uniform     sampler2D   u_Samplers[15];
        uniform     sampler2D   u_LightSampler;

        // 采样纹理像素颜色(采样器索引，坐标)
        // 采样器数组的索引必须使用常量
        vec4 sampler(int index, vec2 uv) {
          for (int i = 0; i < 15; i++) {
            if (i == index) {
              return texture2D(u_Samplers[i], uv);
            }
          }
        }

        // 获取光照颜色系数(全局采样)
        vec3 getLightColor() {
          if (v_LightColor.z != -1.0) return v_LightColor;
          return texture2D(u_LightSampler, v_LightColor.xy).rgb;
        }

        void main() {
          gl_FragColor = sampler(int(v_TexIndex), v_TexCoord);
          if (gl_FragColor.a == 0.0) discard;
          gl_FragColor.rgb *= getLightColor();
          gl_FragColor.a *= u_Alpha;
        }
        `,
      ) as WebGLTileProgram
      this.useProgram(program)

      // 顶点着色器属性
      const a_Position = this.getAttribLocation(program, 'a_Position')
      const a_TexCoord = this.getAttribLocation(program, 'a_TexCoord')
      const a_TexIndex = this.getAttribLocation(program, 'a_TexIndex')
      const u_Flip = this.getUniformLocation(program, 'u_Flip')!
      const u_Matrix = this.getUniformLocation(program, 'u_Matrix')!
      const u_Ambient = this.getUniformLocation(program, 'u_Ambient')!
      const u_LightMode = this.getUniformLocation(program, 'u_LightMode')!
      const u_LightTexSize = this.getUniformLocation(program, 'u_LightTexSize')!
      // 设置光线采样器指向最后一个纹理
      this.uniform1i(this.getUniformLocation(program, 'u_LightSampler'), this.maxTexUnits - 1)

      // 片元着色器属性
      const u_Alpha = this.getUniformLocation(program, 'u_Alpha')!
      const u_SamplerLength = this.maxTexUnits - 1
      const u_Samplers = []
      for (let i = 0; i < u_SamplerLength; i++) {
        u_Samplers.push(this.getUniformLocation(program, `u_Samplers[${i}]`)!)
      }

      // 创建顶点数组对象
      const vao = this.createVertexArray()!
      this.bindVertexArray(vao)
      this.enableVertexAttribArray(a_Position)
      this.enableVertexAttribArray(a_TexCoord)
      this.enableVertexAttribArray(a_TexIndex)
      this.bindBuffer(this.ARRAY_BUFFER, this.vertexBuffer)
      this.vertexAttribPointer(a_Position, 2, this.FLOAT, false, 20, 0)
      this.vertexAttribPointer(a_TexCoord, 2, this.FLOAT, false, 20, 8)
      this.vertexAttribPointer(a_TexIndex, 1, this.FLOAT, false, 20, 16)
      this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, this.elementBuffer)

      // 使用程序对象
      const use = () => {
        if (this.program !== program) {
          this.program = program
          this.useProgram(program)
        }
        if (program.flip !== this.flip) {
          program.flip = this.flip
          this.uniform1f(u_Flip, program.flip)
        }
        if (program.alpha !== this.alpha) {
          program.alpha = this.alpha
          this.uniform1f(u_Alpha, program.alpha)
        }
        return program
      }

      // 保存程序对象
      program.use = use
      program.vao = vao
      program.flip = 0
      program.alpha = 0
      program.samplerNum = 1
      program.a_Position = a_Position
      program.a_TexCoord = a_TexCoord
      program.a_TexIndex = a_TexIndex
      program.u_Matrix = u_Matrix
      program.u_Ambient = u_Ambient
      program.u_LightMode = u_LightMode
      program.u_LightTexSize = u_LightTexSize
      program.u_Samplers = u_Samplers
      return program
    }

    // WebGL上下文方法 - 创建精灵程序
    GL.createSpriteProgram = function (): WebGLSpriteProgram {
      const program = this.createProgramWithShaders(
        `
        attribute   vec2        a_Position;
        attribute   vec2        a_TexCoord;
        attribute   vec3        a_TexParam;
        attribute   vec4        a_Tint;
        attribute   vec2        a_LightCoord;
        uniform     float       u_Flip;
        uniform     mat3        u_Matrix;
        uniform     vec4        u_LightTexSize;
        uniform     sampler2D   u_LightSampler;
        varying     float       v_TexIndex;
        varying     float       v_Opacity;
        varying     vec4        v_Tint;
        varying     vec2        v_TexCoord;
        varying     vec3        v_LightColor;

        // 获取光照颜色系数
        vec3 getLightColor() {
          // 参数Z分量是0 = 光线采样：原始图像
          if (a_TexParam.z == 0.0) {
            return vec3(1.0, 1.0, 1.0);
          }
          // 参数Z分量是1 = 光线采样：全局采样
          if (a_TexParam.z == 1.0) {
            return vec3(
              gl_Position.x / u_LightTexSize.x + u_LightTexSize.z,
              gl_Position.y / u_LightTexSize.y * u_Flip + u_LightTexSize.w,
              -1.0
            );
          }
          // 参数Z分量是2 = 光线采样：锚点采样
          if (a_TexParam.z == 2.0) {
            return texture2D(u_LightSampler, a_LightCoord).rgb;
          }
        }

        void main() {
          gl_Position.xyw = u_Matrix * vec3(a_Position, 1.0);
          v_TexIndex = a_TexParam.x;
          // 不透明度归一化(0~255映射为0~1)
          v_Opacity = a_TexParam.y / 255.0;
          // 解压缩色调编码(0~510映射为-1~1)
          v_Tint = a_Tint / 255.0 - 1.0;
          v_TexCoord = a_TexCoord;
          v_LightColor = getLightColor();
        }
        `,
        `
        precision   highp       float;
        varying     float       v_TexIndex;
        varying     float       v_Opacity;
        varying     vec4        v_Tint;
        varying     vec2        v_TexCoord;
        varying     vec3        v_LightColor;
        uniform     float       u_Alpha;
        uniform     sampler2D   u_Samplers[15];
        uniform     sampler2D   u_LightSampler;

        // 采样纹理像素颜色(采样器索引，坐标)
        // 采样器数组的索引必须使用常量
        vec4 sampler(int index, vec2 uv) {
          for (int i = 0; i < 15; i++) {
            if (i == index) {
              return texture2D(u_Samplers[i], uv);
            }
          }
        }

        // 对颜色使用色调
        vec3 tint(vec3 color, vec4 tint) {
          return color.rgb * (1.0 - tint.a) + tint.rgb +
          dot(color.rgb, vec3(0.299, 0.587, 0.114)) * tint.a;
        }

        // 获取光照颜色系数(全局采样)
        vec3 getLightColor() {
          if (v_LightColor.z != -1.0) return v_LightColor;
          return texture2D(u_LightSampler, v_LightColor.xy).rgb;
        }

        void main() {
          gl_FragColor = sampler(int(v_TexIndex), v_TexCoord);
          if (gl_FragColor.a == 0.0) discard;
          gl_FragColor.rgb = tint(gl_FragColor.rgb, v_Tint) * getLightColor();
          gl_FragColor.a *= v_Opacity * u_Alpha;
        }
        `,
      ) as WebGLSpriteProgram
      this.useProgram(program)

      // 顶点着色器属性
      const a_Position = this.getAttribLocation(program, 'a_Position')
      const a_TexCoord = this.getAttribLocation(program, 'a_TexCoord')
      const a_TexParam = this.getAttribLocation(program, 'a_TexParam')
      const a_Tint = this.getAttribLocation(program, 'a_Tint')!
      const a_LightCoord = this.getAttribLocation(program, 'a_LightCoord')!
      const u_Flip = this.getUniformLocation(program, 'u_Flip')!
      const u_Matrix = this.getUniformLocation(program, 'u_Matrix')!
      const u_LightTexSize = this.getUniformLocation(program, 'u_LightTexSize')!
      // 设置光线采样器指向最后一个纹理
      this.uniform1i(this.getUniformLocation(program, 'u_LightSampler'), this.maxTexUnits - 1)

      // 片元着色器属性
      const u_Alpha = this.getUniformLocation(program, 'u_Alpha')
      const u_SamplerLength = this.maxTexUnits - 1
      const u_Samplers = []
      for (let i = 0; i < u_SamplerLength; i++) {
        u_Samplers.push(this.getUniformLocation(program, `u_Samplers[${i}]`)!)
      }

      // 创建顶点数组对象
      const vao = this.createVertexArray()!
      this.bindVertexArray(vao)
      this.enableVertexAttribArray(a_Position)
      this.enableVertexAttribArray(a_TexCoord)
      this.enableVertexAttribArray(a_TexParam)
      this.enableVertexAttribArray(a_Tint)
      this.enableVertexAttribArray(a_LightCoord)
      this.bindBuffer(this.ARRAY_BUFFER, this.vertexBuffer)
      this.vertexAttribPointer(a_Position, 2, this.FLOAT, false, 32, 0)
      this.vertexAttribPointer(a_TexCoord, 2, this.FLOAT, false, 32, 8)
      this.vertexAttribPointer(a_TexParam, 3, this.UNSIGNED_BYTE, false, 32, 16)
      this.vertexAttribPointer(a_Tint, 4, this.UNSIGNED_SHORT, false, 32, 20)
      this.vertexAttribPointer(a_LightCoord, 2, this.UNSIGNED_SHORT, true, 32, 28)
      this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, this.elementBuffer)

      // 使用程序对象
      const use = () => {
        if (this.program !== program) {
          this.program = program
          this.useProgram(program)
        }
        if (program.flip !== this.flip) {
          program.flip = this.flip
          this.uniform1f(u_Flip, program.flip)
        }
        if (program.alpha !== this.alpha) {
          program.alpha = this.alpha
          this.uniform1f(u_Alpha, program.alpha)
        }
        return program
      }

      // 保存程序对象
      program.use = use
      program.vao = vao
      program.flip = 0
      program.alpha = 0
      program.samplerNum = 1
      program.a_Position = a_Position
      program.a_TexCoord = a_TexCoord
      program.a_TexParam = a_TexParam
      program.a_Tint = a_Tint
      program.a_LightCoord = a_LightCoord
      program.u_Matrix = u_Matrix
      program.u_LightTexSize = u_LightTexSize
      program.u_Samplers = u_Samplers
      return program
    }

    // WebGL上下文方法 - 创建粒子程序
    GL.createParticleProgram = function (): WebGLParticleProgram {
      const program = this.createProgramWithShaders(
        `
        attribute   vec2        a_Position;
        attribute   vec2        a_TexCoord;
        attribute   vec4        a_Color;
        uniform     float       u_Flip;
        uniform     mat3        u_Matrix;
        uniform     vec3        u_Ambient;
        uniform     int         u_LightMode;
        uniform     vec4        u_LightTexSize;
        uniform     sampler2D   u_LightSampler;
        varying     vec2        v_TexCoord;
        varying     vec4        v_Color;
        varying     vec3        v_LightColor;

        vec3 getLightColor() {
          if (u_LightMode == 0) {
            // 光线采样：原始图像
            return vec3(1.0, 1.0, 1.0);
          }
          if (u_LightMode == 1) {
            // 光线采样：全局采样
            return vec3(
              gl_Position.x / u_LightTexSize.x + u_LightTexSize.z,
              gl_Position.y / u_LightTexSize.y * u_Flip + u_LightTexSize.w,
              -1.0
            );
          }
          if (u_LightMode == 2) {
            // 光线采样：环境光
            return u_Ambient;
          }
        }

        void main() {
          gl_Position.xyw = u_Matrix * vec3(a_Position, 1.0);
          v_TexCoord = a_TexCoord;
          v_Color = a_Color;
          v_LightColor = getLightColor();
        }
        `,
        `
        precision   highp       float;
        varying     vec2        v_TexCoord;
        varying     vec4        v_Color;
        varying     vec3        v_LightColor;
        uniform     float       u_Alpha;
        uniform     int         u_Mode;
        uniform     vec4        u_Tint;
        uniform     sampler2D   u_Sampler;
        uniform     sampler2D   u_LightSampler;

        vec3 getLightColor() {
          if (v_LightColor.z != -1.0) return v_LightColor;
          return texture2D(u_LightSampler, v_LightColor.xy).rgb;
        }

        void main() {
          if (u_Mode == 0) {
            // 颜色模式：指定颜色
            float alpha = texture2D(u_Sampler, v_TexCoord).a;
            gl_FragColor.a = alpha * v_Color.a * u_Alpha;
            if (gl_FragColor.a == 0.0) discard;
            gl_FragColor.rgb = v_Color.rgb;
          } else if (u_Mode == 1) {
            // 颜色模式：纹理采样 + 色调
            gl_FragColor = texture2D(u_Sampler, v_TexCoord);
            gl_FragColor.a *= v_Color.a * u_Alpha;
            if (gl_FragColor.a == 0.0) discard;
            gl_FragColor.rgb = gl_FragColor.rgb * (1.0 - u_Tint.a) + u_Tint.rgb +
            dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114)) * u_Tint.a;
          }
          gl_FragColor.rgb *= getLightColor();
        }
        `,
      ) as WebGLParticleProgram
      this.useProgram(program)

      // 顶点着色器属性
      const a_Position = this.getAttribLocation(program, 'a_Position')
      const a_TexCoord = this.getAttribLocation(program, 'a_TexCoord')
      const a_Color = this.getAttribLocation(program, 'a_Color')
      const u_Flip = this.getUniformLocation(program, 'u_Flip')!
      const u_Matrix = this.getUniformLocation(program, 'u_Matrix')!
      const u_Ambient = this.getUniformLocation(program, 'u_Ambient')!
      const u_LightMode = this.getUniformLocation(program, 'u_LightMode')!
      const u_LightTexSize = this.getUniformLocation(program, 'u_LightTexSize')!
      this.uniform1i(this.getUniformLocation(program, 'u_LightSampler'), this.maxTexUnits - 1)

      // 片元着色器属性
      const u_Alpha = this.getUniformLocation(program, 'u_Alpha')!
      const u_Mode = this.getUniformLocation(program, 'u_Mode')!
      const u_Tint = this.getUniformLocation(program, 'u_Tint')!

      // 创建顶点数组对象
      const vao = this.createVertexArray()!
      this.bindVertexArray(vao)
      this.enableVertexAttribArray(a_Position)
      this.enableVertexAttribArray(a_TexCoord)
      this.enableVertexAttribArray(a_Color)
      this.bindBuffer(this.ARRAY_BUFFER, this.vertexBuffer)
      this.vertexAttribPointer(a_Position, 2, this.FLOAT, false, 20, 0)
      this.vertexAttribPointer(a_TexCoord, 2, this.FLOAT, false, 20, 8)
      this.vertexAttribPointer(a_Color, 4, this.UNSIGNED_BYTE, true, 20, 16)
      this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, this.elementBuffer)

      // 使用程序对象
      const use = () => {
        if (this.program !== program) {
          this.program = program
          this.useProgram(program)
        }
        if (program.flip !== this.flip) {
          program.flip = this.flip
          this.uniform1f(u_Flip, program.flip)
        }
        if (program.alpha !== this.alpha) {
          program.alpha = this.alpha
          this.uniform1f(u_Alpha, program.alpha)
        }
        this.updateBlending()
        return program
      }

      // 保存程序对象
      program.use = use
      program.vao = vao
      program.flip = 0
      program.alpha = 0
      program.a_Position = a_Position
      program.a_TexCoord = a_TexCoord
      program.a_Color = a_Color
      program.u_Matrix = u_Matrix
      program.u_Ambient = u_Ambient
      program.u_LightMode = u_LightMode
      program.u_LightTexSize = u_LightTexSize
      program.u_Mode = u_Mode
      program.u_Tint = u_Tint
      return program
    }

    // WebGL上下文方法 - 创建光源程序
    GL.createLightProgram = function (): WebGLLightProgram {
      const program = this.createProgramWithShaders(
        `
        attribute   vec2        a_Position;
        attribute   vec2        a_LightCoord;
        attribute   vec4        a_LightColor;
        uniform     mat3        u_Matrix;
        varying     vec2        v_LightCoord;
        varying     vec4        v_LightColor;

        void main() {
          gl_Position.xyw = u_Matrix * vec3(a_Position, 1.0);
          v_LightCoord = a_LightCoord;
          v_LightColor = a_LightColor;
        }
        `,
        `
        precision   highp       float;
        const       float       PI = 3.1415926536;
        varying     vec2        v_LightCoord;
        varying     vec4        v_LightColor;
        uniform     int         u_LightMode;
        uniform     sampler2D   u_LightSampler;

        // 获取光照颜色
        vec3 getLightColor() {
          if (u_LightMode == 0) {
            // 光照模式：点光源
            float dist = length(vec2(
              (v_LightCoord.x - 0.5),
              (v_LightCoord.y - 0.5)
            ));
            // 放弃圆形外面像素
            if (dist > 0.5) discard;
            // 根据距离和强度来计算光照颜色系数
            float angle = dist * PI;
            float factor = mix(1.0 - sin(angle), cos(angle), v_LightColor.a);
            return v_LightColor.rgb * factor;
          }
          if (u_LightMode == 1) {
            // 光照模式：区域光源
            vec4 lightColor = texture2D(u_LightSampler, v_LightCoord);
            if (lightColor.a == 0.0) discard;
            // 从纹理中采样颜色，与光照颜色相乘
            return v_LightColor.rgb * lightColor.rgb * lightColor.a;
          }
          if (u_LightMode == 2) {
            // 光照模式：区域光源(无纹理)
            return v_LightColor.rgb;
          }
        }

        void main() {
          gl_FragColor = vec4(getLightColor(), 1.0);
        }
        `,
      ) as WebGLLightProgram
      this.useProgram(program)
      // u_LightSampler绑定的0号纹理绘制的时候不是必须的
      // 如果纹理已被删除，部分Android Web控制台输出错误警告

      // 顶点着色器属性
      const a_Position = this.getAttribLocation(program, 'a_Position')
      const a_LightCoord = this.getAttribLocation(program, 'a_LightCoord')
      const a_LightColor = this.getAttribLocation(program, 'a_LightColor')
      const u_Matrix = this.getUniformLocation(program, 'u_Matrix')!

      // 片元着色器属性
      const u_LightMode = this.getUniformLocation(program, 'u_LightMode')!

      // 创建顶点数组对象
      const vao = this.createVertexArray() as WebGLVertexArrayObjectLight
      this.bindVertexArray(vao)
      this.enableVertexAttribArray(a_Position)
      this.enableVertexAttribArray(a_LightCoord)
      this.enableVertexAttribArray(a_LightColor)
      this.bindBuffer(this.ARRAY_BUFFER, this.vertexBuffer)
      this.vertexAttribPointer(a_Position, 2, this.FLOAT, false, 32, 0)
      this.vertexAttribPointer(a_LightCoord, 2, this.FLOAT, false, 32, 8)
      this.vertexAttribPointer(a_LightColor, 4, this.FLOAT, false, 32, 16)
      this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, this.elementBuffer)

      // 创建顶点数组对象 - 属性[110]
      vao.a110 = this.createVertexArray()!
      this.bindVertexArray(vao.a110)
      this.enableVertexAttribArray(a_Position)
      this.enableVertexAttribArray(a_LightCoord)
      this.bindBuffer(this.ARRAY_BUFFER, this.vertexBuffer)
      this.vertexAttribPointer(a_Position, 2, this.FLOAT, false, 16, 0)
      this.vertexAttribPointer(a_LightCoord, 2, this.FLOAT, false, 16, 8)
      this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, this.elementBuffer)

      // 使用程序对象
      const use = () => {
        if (this.program !== program) {
          this.program = program
          this.useProgram(program)
        }
        this.updateBlending()
        return program
      }

      // 保存程序对象
      program.use = use
      program.vao = vao
      program.a_Position = a_Position
      program.a_LightCoord = a_LightCoord
      program.a_LightColor = a_LightColor
      program.u_Matrix = u_Matrix
      program.u_LightMode = u_LightMode
      return program
    }

    // WebGL上下文方法 - 创建图形程序
    GL.createGraphicProgram = function (): WebGLGraphicProgram {
      const program = this.createProgramWithShaders(
        `
        attribute   vec2        a_Position;
        attribute   vec4        a_Color;
        uniform     mat3        u_Matrix;
        varying     vec4        v_Color;

        void main() {
          gl_Position.xyw = u_Matrix * vec3(a_Position, 1.0);
          v_Color = a_Color;
        }
        `,
        `
        precision   highp       float;
        varying     vec4        v_Color;
        uniform     float       u_Alpha;

        void main() {
          gl_FragColor.rgb = v_Color.rgb;
          gl_FragColor.a = v_Color.a * u_Alpha;
        }
        `,
      ) as WebGLGraphicProgram
      this.useProgram(program)

      // 顶点着色器属性
      const a_Position = this.getAttribLocation(program, 'a_Position')
      const a_Color = this.getAttribLocation(program, 'a_Color')
      const u_Matrix = this.getUniformLocation(program, 'u_Matrix')!

      // 片元着色器属性
      const u_Alpha = this.getUniformLocation(program, 'u_Alpha')!

      // 创建顶点数组对象
      const vao = this.createVertexArray() as WebGLVertexArrayObjectGraphic
      this.bindVertexArray(vao)
      this.enableVertexAttribArray(a_Position)
      this.enableVertexAttribArray(a_Color)
      this.bindBuffer(this.ARRAY_BUFFER, this.vertexBuffer)
      this.vertexAttribPointer(a_Position, 2, this.FLOAT, false, 12, 0)
      this.vertexAttribPointer(a_Color, 4, this.UNSIGNED_BYTE, true, 12, 8)
      this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, this.elementBuffer)

      // 创建顶点数组对象 - 属性[10]
      vao.a10 = this.createVertexArray()!
      this.bindVertexArray(vao.a10)
      this.enableVertexAttribArray(a_Position)
      this.bindBuffer(this.ARRAY_BUFFER, this.vertexBuffer)
      this.vertexAttribPointer(a_Position, 2, this.FLOAT, false, 0, 0)
      this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, this.elementBuffer)

      // 使用程序对象
      const use = () => {
        if (this.program !== program) {
          this.program = program
          this.useProgram(program)
        }
        if (program.alpha !== this.alpha) {
          program.alpha = this.alpha
          this.uniform1f(u_Alpha, program.alpha)
        }
        this.updateBlending()
        return program
      }

      // 保存程序对象
      program.use = use
      program.vao = vao
      program.alpha = 0
      program.a_Position = a_Position
      program.a_Color = a_Color
      program.u_Matrix = u_Matrix
      return program
    }

    // WebGL上下文方法 - 重置状态
    GL.reset = function (): void {
      this.blend = 'normal'
      this.alpha = 1
      this.matrix.reset()
    }

    // WebGL上下文方法 - 创建混合模式更新器
    GL.createBlendingUpdater = function () {
      // 开启混合功能
      this.enable(this.BLEND)

      // 更新器映射表(启用混合时)
      const A = {
        // 正常模式
        normal: () => {
          this.blendEquation(this.FUNC_ADD)
          this.blendFuncSeparate(this.SRC_ALPHA, this.ONE_MINUS_SRC_ALPHA, this.ONE, this.ZERO)
        },
        // 滤色模式
        screen: () => {
          this.blendEquation(this.FUNC_ADD)
          this.blendFunc(this.ONE, this.ONE_MINUS_SRC_COLOR)
        },
        // 加法模式
        additive: () => {
          this.blendEquation(this.FUNC_ADD)
          this.blendFuncSeparate(this.SRC_ALPHA, this.DST_ALPHA, this.ONE, this.ZERO)
        },
        // 减法模式
        subtract: () => {
          this.blendEquation(this.FUNC_REVERSE_SUBTRACT)
          this.blendFuncSeparate(this.SRC_ALPHA, this.DST_ALPHA, this.ONE, this.ZERO)
        },
        // 最大值模式
        max: () => {
          this.blendEquation(this.MAX)
        },
        // 复制模式
        copy: () => {
          // 关闭混合功能，切换到B组更新器
          this.disable(this.BLEND)
          updaters = B
        },
      }

      // 从复制模式切换到其他模式
      const resume = (): void => {
        // 开启混合功能，切换到A组更新器
        (updaters = A)[blend]()
        this.enable(this.BLEND)
      }

      // 更新器映射表(禁用混合时)
      const B = {
        normal: resume,
        screen: resume,
        additive: resume,
        subtract: resume,
        max: resume,
        copy: Function.empty,
      }

      let updaters = A
      let blend = '' as BlendingMode
      // 返回更新混合模式方法
      return () => {
        if (blend !== this.blend) {
          updaters[blend = this.blend]()
        }
      }
    }

    // WebGL上下文方法 - 设置环境光
    GL.setAmbientLight = function (light: GLAmbientLight): void {
      const ambient = this.ambient
      if (ambient.red !== light.red ||
        ambient.green !== light.green ||
        ambient.blue !== light.blue) {
        ambient.red = light.red
        ambient.green = light.green
        ambient.blue = light.blue
        const program = this.program
        const r = ambient.red / 255
        const g = ambient.green / 255
        const b = ambient.blue / 255
        // 更新以下GL程序的环境光变量
        for (const program of [
          this.imageProgram,
          this.tileProgram,
          this.particleProgram,
        ]) {
          this.useProgram(program)
          this.uniform3f(program.u_Ambient, r, g, b)
        }
        this.useProgram(program)
      }
    }

    // WebGL上下文方法 - 调整光影纹理
    GL.resizeLightMap = function (): void {
      const texture = this.reflectedLightMap
      const width = this.width
      const height = this.height
      if (texture.innerWidth !== width ||
        texture.innerHeight !== height) {
        texture.innerWidth = width
        texture.innerHeight = height
        if (texture.paddingLeft === undefined) {
          const {lightArea} = Data.config
          // 首次调用时计算光影纹理最大扩张值(4倍)
          texture.paddingLeft = Math.min(lightArea.expansionLeft * 4, 512)
          texture.paddingTop = Math.min(lightArea.expansionTop * 4, 512)
          texture.paddingRight = Math.min(lightArea.expansionRight * 4, 512)
          texture.paddingBottom = Math.min(lightArea.expansionBottom * 4, 512)
        }
        const pl = texture.paddingLeft
        const pt = texture.paddingTop
        const pr = texture.paddingRight
        const pb = texture.paddingBottom
        const tWidth = width + pl + pr
        const tHeight = height + pt + pb
        // 重置缩放率(将会重新计算纹理参数)
        texture.scale = 0
        texture.resize(tWidth, tHeight)
        this.bindTexture(this.TEXTURE_2D, null)
        this.updateLightTexSize()
      }
    }

    // WebGL上下文方法 - 更新光照纹理大小
    GL.updateLightTexSize = function (): void {
      const texture = this.reflectedLightMap
      if (texture.width === 0) return
      const width = this.drawingBufferWidth
      const height = this.drawingBufferHeight
      const sizeX = texture.width / width * 2
      const sizeY = texture.height / height * 2
      const centerX = (texture.paddingLeft + width / 2) / texture.width
      const centerY = (texture.paddingTop + height / 2) / texture.height
      const program = this.program
      // 更新以下GL程序的光照纹理参数
      for (const program of [
        this.imageProgram,
        this.tileProgram,
        this.spriteProgram,
        this.particleProgram,
      ]) {
        this.useProgram(program)
        this.uniform4f(program.u_LightTexSize, sizeX, sizeY, centerX, centerY)
      }
      this.useProgram(program)
    }

    // WebGL上下文方法 - 更新纹理采样器数量
    GL.updateSamplerNum = function (samplerNum: number): void {
      // 在旧版的Chrome中，不重置过期的采样器索引会被警告，因此这个算法被保留了下来
      const program = this.program
      if ('samplerNum' in program) {
        const lastNum = program.samplerNum
        // 如果采样器数量发生了变化
        if (lastNum !== samplerNum) {
          const u_Samplers = program.u_Samplers
          if (lastNum < samplerNum) {
            // 如果采样器数量增多，设置新增的采样器索引
            for (let i = lastNum; i < samplerNum; i++) {
              this.uniform1i(u_Samplers[i], i)
            }
          } else {
            // 如果采样器数量减少，重置过期的采样器索引
            for (let i = samplerNum; i < lastNum; i++) {
              this.uniform1i(u_Samplers[i], 0)
            }
          }
          program.samplerNum = samplerNum
        }
      }
    }

    // WebGL上下文方法 - 绑定帧缓冲对象
    GL.bindFBO = function (fbo: WebGLFramebuffer): void {
      this.binding = fbo
      this.flip = 1
      this.bindFramebuffer(this.FRAMEBUFFER, fbo)
    }

    // WebGL上下文方法 - 解除帧缓冲对象的绑定
    GL.unbindFBO = function (): void {
      this.binding = null
      this.flip = -1
      this.bindFramebuffer(this.FRAMEBUFFER, null)
    }

    // 设置视口大小(单位:像素)
    GL.setViewport = function (x: number, y: number, width: number, height: number): void {
      this.width = width
      this.height = height
      this.viewport(x, y, width, height)
    }

    // 重置视口大小
    GL.resetViewport = function () {
      const width = this.drawingBufferWidth
      const height = this.drawingBufferHeight
      this.width = width
      this.height = height
      this.viewport(0, 0, width, height)
    }

    /** WebGL上下文方法 - 激活离屏渲染 */
    GL.enableOffscreen = function enableOffscreen() {
      const {unbindFBO, resetViewport} = GL

      // 离屏模式 - 解除帧缓冲对象的绑定
      function offscreenUnbindFBO(this: typeof GL) {
        this.binding = null
        this.flip = 1
        // 重新绑定到当前离屏纹理的FBO
        this.bindFramebuffer(this.FRAMEBUFFER, this.offscreen.current.fbo)
      }

      // 离屏模式 - 重置窗口大小
      function offscreenResetViewport(this: typeof GL) {
        const base = this.offscreen.current.base
        const width = base.width
        const height = base.height
        this.width = width
        this.height = height
        // 将视口设为当前离屏纹理的大小
        this.viewport(0, 0, width, height)
      }

      return function (this: typeof GL, enabled: boolean): void {
        const offscreen = this.offscreen
        if (offscreen.enabled !== enabled) {
          offscreen.enabled = enabled
          if (enabled) {
            // 如果启用，调整当前离屏纹理大小
            const texture = offscreen.current
            const width = this.drawingBufferWidth
            const height = this.drawingBufferHeight
            if (texture.base.width !== width ||
              texture.base.height !== height) {
              texture.resize(width, height)
            }
            // 替换成离屏渲染模式下的特定方法
            this.unbindFBO = offscreenUnbindFBO
            this.resetViewport = offscreenResetViewport
          } else {
            // 如果禁用，恢复默认的方法
            this.unbindFBO = unbindFBO
            this.resetViewport = resetViewport
          }
          this.unbindFBO()
        }
      }
    }()

    // WebGL上下文方法 - 切换离屏纹理
    GL.switchOffscreen = function (): void {
      const offscreen = this.offscreen
      // 如果启用了离屏渲染
      if (offscreen.enabled) {
        const texture = offscreen.last
        const width = this.drawingBufferWidth
        const height = this.drawingBufferHeight
        // 获取上次离屏纹理，并调整大小
        if (texture.base.width !== width ||
          texture.base.height !== height) {
          texture.resize(width, height)
        }
        // 交换上次和当前的离屏纹理
        offscreen.last = offscreen.current
        offscreen.current = texture
        // 绑定当前离屏纹理的FBO(offscreenUnbindFBO)
        this.unbindFBO()
      }
    }

    // WebGL上下文方法 - 调整画布大小
    GL.resize = function (width: number, height: number): void {
      const canvas = this.canvas
      // 尽量少的画布缓冲区重置次数
      if (canvas.width !== width) {
        canvas.width = width
      }
      if (canvas.height !== height) {
        canvas.height = height
      }
      if (this.width !== width ||
        this.height !== height) {
        // 更新画布大小参数和视口
        this.width = width
        this.height = height
        this.viewport(0, 0, width, height)
        this.maskTexture.resize(width, height)
        this.directLightMap.resize(width, height)
      }
      // 调整光影纹理
      this.resizeLightMap()
    }

    // WebGL上下文方法 - 绘制图像
    const defTint: ImageTint = [0, 0, 0, 0]
    GL.drawImage = function (texture: Texture, dx: number, dy: number, dw: number, dh: number, tint: ImageTint = defTint): void {
      if (!texture.complete) return

      const program = this.imageProgram.use()
      const vertices = this.arrays[0].float32
      const base = texture.base
      const sx = texture.x
      const sy = texture.y
      const sw = texture.width
      const sh = texture.height
      const tw = base.width
      const th = base.height

      // 计算变换矩阵
      const matrix = Matrix.instance.project(
        this.flip,
        this.width,
        this.height,
      ).multiply(this.matrix)

      // 计算顶点数据
      const dl = dx + 0.004
      const dt = dy + 0.004
      const dr = dl + dw
      const db = dt + dh
      const sl = sx / tw
      const st = sy / th
      const sr = (sx + sw) / tw
      const sb = (sy + sh) / th
      vertices[0] = dl
      vertices[1] = dt
      vertices[2] = sl
      vertices[3] = st
      vertices[4] = dl
      vertices[5] = db
      vertices[6] = sl
      vertices[7] = sb
      vertices[8] = dr
      vertices[9] = db
      vertices[10] = sr
      vertices[11] = sb
      vertices[12] = dr
      vertices[13] = dt
      vertices[14] = sr
      vertices[15] = st

      // 色调归一化
      const red = tint[0] / 255
      const green = tint[1] / 255
      const blue = tint[2] / 255
      const gray = tint[3] / 255

      // 绘制图像
      this.bindVertexArray(program.vao.a110)
      this.vertexAttrib1f(program.a_Opacity, 1)
      this.uniformMatrix3fv(program.u_Matrix, false, matrix)
      this.uniform1i(program.u_LightMode, 0)
      this.uniform1i(program.u_ColorMode, 0)
      this.uniform4f(program.u_Tint, red, green, blue, gray)
      this.bufferData(this.ARRAY_BUFFER, vertices, this.STREAM_DRAW, 0, 16)
      this.bindTexture(this.TEXTURE_2D, base.glTexture)
      this.drawArrays(this.TRIANGLE_FAN, 0, 4)
    }

    // WebGL上下文方法 - 绘制指定颜色的图像
    GL.drawImageWithColor = function (texture: Texture, dx: number, dy: number, dw: number, dh: number, color: number): void {
      if (!texture.complete) return

      const program = this.imageProgram.use()
      const vertices = this.arrays[0].float32
      const base = texture.base
      const sx = texture.x
      const sy = texture.y
      const sw = texture.width
      const sh = texture.height
      const tw = base.width
      const th = base.height

      // 计算变换矩阵
      const matrix = Matrix.instance.project(
        this.flip,
        this.width,
        this.height,
      ).multiply(this.matrix)

      // 计算顶点数据
      const dl = dx + 0.004
      const dt = dy + 0.004
      const dr = dl + dw
      const db = dt + dh
      const sl = sx / tw
      const st = sy / th
      const sr = (sx + sw) / tw
      const sb = (sy + sh) / th
      vertices[0] = dl
      vertices[1] = dt
      vertices[2] = sl
      vertices[3] = st
      vertices[4] = dl
      vertices[5] = db
      vertices[6] = sl
      vertices[7] = sb
      vertices[8] = dr
      vertices[9] = db
      vertices[10] = sr
      vertices[11] = sb
      vertices[12] = dr
      vertices[13] = dt
      vertices[14] = sr
      vertices[15] = st

      // 色调归一化
      const red = (color & 0xff) / 255
      const green = (color >> 8 & 0xff) / 255
      const blue = (color >> 16 & 0xff) / 255
      const gray = (color >> 24 & 0xff) / 255

      // 绘制图像
      this.bindVertexArray(program.vao.a110)
      this.vertexAttrib1f(program.a_Opacity, 1)
      this.uniformMatrix3fv(program.u_Matrix, false, matrix)
      this.uniform1i(program.u_LightMode, 0)
      this.uniform1i(program.u_ColorMode, 1)
      this.uniform4f(program.u_Color, red, green, blue, gray)
      this.bufferData(this.ARRAY_BUFFER, vertices, this.STREAM_DRAW, 0, 16)
      this.bindTexture(this.TEXTURE_2D, base.glTexture)
      this.drawArrays(this.TRIANGLE_FAN, 0, 4)
    }

    // WebGL上下文方法 - 绘制切片图像
    GL.drawSliceImage = function (texture: ImageTexture, dx: number, dy: number, dw: number, dh: number, clip: ImageClip, border: number, tint: ImageTint): void {
      if (!texture.complete) return

      // 计算变换矩阵
      const matrix = Matrix.instance.project(
        this.flip,
        this.width,
        this.height,
      ).multiply(this.matrix)
      .translate(dx + 0.004, dy + 0.004)

      // 更新切片数据
      const sliceClip = texture.sliceClip!
      if (texture.sliceWidth !== dw ||
        texture.sliceHeight !== dh ||
        sliceClip[0] !== clip[0] ||
        sliceClip[1] !== clip[1] ||
        sliceClip[2] !== clip[2] ||
        sliceClip[3] !== clip[3] ||
        texture.sliceBorder !== border) {
        texture.updateSliceData(dw, dh, clip, border)
      }

      // 色调归一化
      const red = tint[0] / 255
      const green = tint[1] / 255
      const blue = tint[2] / 255
      const gray = tint[3] / 255

      // 上传数据
      const program = this.imageProgram.use()
      const vertices = texture.sliceVertices!
      const thresholds = texture.sliceThresholds!
      const count = texture.sliceCount!
      this.bindVertexArray(program.vao.a110)
      this.vertexAttrib1f(program.a_Opacity, 1)
      this.uniformMatrix3fv(program.u_Matrix, false, matrix)
      this.uniform1i(program.u_LightMode, 0)
      this.uniform1i(program.u_ColorMode, 2)
      this.uniform4f(program.u_Tint, red, green, blue, gray)
      this.bufferData(this.ARRAY_BUFFER, vertices, this.STREAM_DRAW, 0, count * 16)
      this.bindTexture(this.TEXTURE_2D, texture.base.glTexture)

      // 绘制切片
      for (let i = 0; i < count; i++) {
        const ti = i * 4
        const x = thresholds[ti]
        const y = thresholds[ti + 1]
        const w = thresholds[ti + 2]
        const h = thresholds[ti + 3]
        this.uniform4f(program.u_Repeat, x, y, w, h)
        this.drawArrays(this.TRIANGLE_FAN, i * 4, 4)
      }
    }

    // WebGL上下文方法 - 填充矩形
    GL.fillRect = function (dx: number, dy: number, dw: number, dh: number, color: number): void {
      const program = this.graphicProgram.use()
      const vertices = this.arrays[0].float32
      const colors = this.arrays[0].uint32

      // 计算变换矩阵
      const matrix = Matrix.instance.project(
        this.flip,
        this.width,
        this.height,
      ).multiply(this.matrix)

      // 计算顶点数据
      const dl = dx
      const dt = dy
      const dr = dx + dw
      const db = dy + dh
      vertices[0] = dl
      vertices[1] = dt
      colors  [2] = color
      vertices[3] = dl
      vertices[4] = db
      colors  [5] = color
      vertices[6] = dr
      vertices[7] = db
      colors  [8] = color
      vertices[9] = dr
      vertices[10] = dt
      colors  [11] = color

      // 绘制图像
      this.bindVertexArray(program.vao)
      this.uniformMatrix3fv(program.u_Matrix, false, matrix)
      this.bufferData(this.ARRAY_BUFFER, vertices, this.STREAM_DRAW, 0, 12)
      this.drawArrays(this.TRIANGLE_FAN, 0, 4)
    }

    // WebGL上下文方法 - 创建普通纹理
    GL.createNormalTexture = function (options: NormalTextureOptions = {}): BaseTexture {
      const texture = new BaseTexture(options)
      this.textureManager.append(texture)
      return texture
    }

    // WebGL上下文方法 - 创建图像纹理
    GL.createImageTexture = function (image: string | HTMLImageElement, options: ImageTextureOptions = {}): BaseTexture {
      const guid = image instanceof Image ? image.guid : image
      const manager = this.textureManager
      let texture = manager.images[guid]
      if (!texture) {
        texture = new BaseTexture(options)
        texture.guid = guid
        manager.append(texture)
        manager.images[guid] = texture
        const initialize = (image: HTMLImageElement) => {
          // 如果纹理还在管理器中，并且加载图像成功
          if (manager.images[guid] === texture && image) {
            texture!.width = Math.min(image.naturalWidth, this.maxTexSize)
            texture!.height = Math.min(image.naturalHeight, this.maxTexSize)
            // 上传RGBA格式的图像数据到纹理
            this.bindTexture(this.TEXTURE_2D, texture!.glTexture)
            this.texImage2D(this.TEXTURE_2D, 0, texture!.format, texture!.width, texture!.height, 0, texture!.format, this.UNSIGNED_BYTE, image)
            // 执行纹理已加载回调
            texture!.reply('load')
          } else {
            // 执行纹理加载错误回调
            texture!.reply('error')
          }
        }
        if (image instanceof HTMLImageElement) {
          initialize(image)
        } else {
          const image = Loader.getImage({guid})
          if (image instanceof HTMLImageElement) {
            initialize(image)
          } else {
            Loader.loadImage({guid}).then(initialize)
          }
        }
      }
      return texture.increaseRefCount()
    }

    // WebGL上下文方法 - 创建纹理帧缓冲对象
    GL.createTextureFBO = function (texture: FBOTexture): WebGLFramebuffer {
      const fbo = this.createFramebuffer()
      if (!fbo) {
        throw new Error('Failed to create frameBuffer')
      }

      // 创建深度模板缓冲区
      texture.depthStencilBuffer = this.createRenderbuffer()

      // 重写纹理方法 - 调整大小
      texture.resize = (width: number, height: number): FBOTexture => {
        Texture.prototype.resize.call(texture, width, height)

        this.bindFramebuffer(this.FRAMEBUFFER, fbo)

        // 绑定纹理到颜色缓冲区
        this.framebufferTexture2D(this.FRAMEBUFFER, this.COLOR_ATTACHMENT0, this.TEXTURE_2D, texture.base.glTexture, 0)

        // 调整深度模板缓冲区大小
        this.bindRenderbuffer(this.RENDERBUFFER, texture.depthStencilBuffer)
        this.framebufferRenderbuffer(this.FRAMEBUFFER, this.DEPTH_STENCIL_ATTACHMENT, this.RENDERBUFFER, texture.depthStencilBuffer)
        this.renderbufferStorage(this.RENDERBUFFER, this.DEPTH_STENCIL, width, height)
        this.bindRenderbuffer(this.RENDERBUFFER, null)
        this.bindFramebuffer(this.FRAMEBUFFER, null)
        return texture
      }

      texture.resize(texture.base.width, texture.base.height)
      return fbo
    }

    // 扩展方法 - 擦除画布
    CanvasRenderingContext2D.prototype.clear = function (): void {
      this.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    // 扩展方法 - 调整画布大小
    CanvasRenderingContext2D.prototype.resize = function (width: number, height: number): void {
      const canvas = this.canvas
      if (canvas.width === width &&
        canvas.height === height) {
        // 宽高不变时重置画布
        canvas.width = width
      } else {
        // 尽量少的画布缓冲区重置次数
        if (canvas.width !== width) {
          canvas.width = width
        }
        if (canvas.height !== height) {
          canvas.height = height
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
