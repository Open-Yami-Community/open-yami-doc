---
sidebar_position: 1
title: drawUIAnimation 绘制界面元素动画
---

## drawUIAnimation

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

绘制界面元素动画

参数 `x`: 水平位置

参数 `y`: 垂直位置

参数 `opacity`: 不透明度

参数 `matrix`: 动画矩阵

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |
| `opacity` | `number` | - | - |
| `matrix` | `Matrix` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 820 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L820)

```typescript
public drawUIAnimation(x: number, y: number, opacity: number, matrix: Matrix): void {
    this.emitterManager?.update(Time.rawDeltaTime)
    this.emitterManager?.drawBack(matrix, opacity)
    GL.alpha = opacity
    const program = GL.spriteProgram.use()
    GL.batchRenderer.bindProgram()
    GL.batchRenderer.setAttrSize(8)
    GL.bindVertexArray(program.vao)
    GL.uniformMatrix3fv(program.u_Matrix, false, matrix)
    this.position.x = x
    this.position.y = y
    this.setDrawingPosition(x, y)
    this.updateFrameParameters()
    this.draw('raw')
    GL.batchRenderer.draw()
    GL.batchRenderer.unbindProgram()
    this.emitterManager?.drawFront(matrix, opacity)
  }
```

---



文档生成时间：2026/1/31 13:13:58
