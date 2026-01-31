---
sidebar_position: 1
title: contextUpdate 上下文方法 - 更新(通用)
---

## contextUpdate

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

上下文方法 - 更新(通用)

参数 `frame`: 动画图层当前帧的数据

参数 `time`: 当前帧到下一帧的过渡时间(比率)

参数 `next`: 动画图层下一帧的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `this` | `AnimationFrameContext` | - | - |
| `frame` | `AnimationJointFrame` | - | - |
| `time` | `number` | - | - |
| `next` | `AnimationJointFrame` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1087 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1087)

```typescript
private static contextUpdate(this: AnimationFrameContext, frame: AnimationJointFrame, time?: number, next?: AnimationJointFrame): void {
    const parent = this.parent
    const matrix = this.matrix
    if (parent !== null) {
      // 从父级图层继承属性
      matrix.set(parent.matrix)
      this.opacity = parent.opacity
    } else {
      // 没有父级图层的情况
      matrix.set(AnimationPlayer.matrix)
      this.opacity = this.animation.opacity
    }
    // 获取当前动画帧的属性
    let positionX = frame.x
    let positionY = frame.y
    let rotation = frame.rotation
    let scaleX = frame.scaleX
    let scaleY = frame.scaleY
    let opacity = frame.opacity
    if (next !== undefined) {
      // 与下一帧属性进行插值计算
      const reverse = 1 - time!
      positionX = positionX * reverse + next.x * time!
      positionY = positionY * reverse + next.y * time!
      rotation = rotation * reverse + next.rotation * time!
      scaleX = scaleX * reverse + next.scaleX * time!
      scaleY = scaleY * reverse + next.scaleY * time!
      opacity = opacity * reverse + next.opacity * time!
    }
    // 使用动画帧属性进行矩阵变换
    matrix
    .translate(positionX, positionY)
    .rotate(Math.radians(rotation))
    .scale(scaleX, scaleY)
    this.opacity *= opacity
    this.frame = frame
  }
```

---



文档生成时间：2026/1/31 13:13:58
