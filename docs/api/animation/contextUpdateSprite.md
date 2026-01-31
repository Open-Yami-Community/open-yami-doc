---
sidebar_position: 1
title: contextUpdateSprite 上下文方法 - 更新精灵层
---

## contextUpdateSprite

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

上下文方法 - 更新精灵层

参数 `frame`: 动画图层当前帧的数据

参数 `time`: 当前帧到下一帧的过渡时间(比率)

参数 `next`: 动画图层下一帧的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `this` | `AnimationFrameContext` | - | - |
| `frame` | `AnimationSpriteFrame` | - | - |
| `time` | `number` | - | - |
| `next` | `AnimationSpriteFrame` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1131 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1131)

```typescript
private static contextUpdateSprite(this: AnimationFrameContext, frame: AnimationSpriteFrame, time?: number, next?: AnimationSpriteFrame): void {
    AnimationPlayer.contextUpdate.call(this, frame, time, next)
    // 读取当前动画帧的参数
    let anchorX = frame.anchorX
    let anchorY = frame.anchorY
    let pivotX = frame.pivotX
    let pivotY = frame.pivotY
    let red = frame.tint[0]
    let green = frame.tint[1]
    let blue = frame.tint[2]
    let gray = frame.tint[3]
    // 与下一帧参数进行插值计算
    if (next !== undefined) {
      const reverse = 1 - time!
      anchorX = anchorX * reverse + next.anchorX * time!
      anchorY = anchorY * reverse + next.anchorY * time!
      pivotX = pivotX * reverse + next.pivotX * time!
      pivotY = pivotY * reverse + next.pivotY * time!
      red = red * reverse + next.tint[0] * time!
      green = green * reverse + next.tint[1] * time!
      blue = blue * reverse + next.tint[2] * time!
      gray = gray * reverse + next.tint[3] * time!
    }
    // 混合全局色调
    for (const tint of this.animation.tints) {
      red += tint[0]
      green += tint[1]
      blue += tint[2]
      gray += tint[3]
    }
    // 获取或创建色调数组
    let tint = this.tint
    if (tint === null) {
      tint = this.tint = new Int16Array(4)
    }
    // 写入参数(限制色调范围)
    this.anchorX = anchorX
    this.anchorY = anchorY
    this.pivotX = pivotX
    this.pivotY = pivotY
    tint[0] = Math.clamp(red, -255, 255)
    tint[1] = Math.clamp(green, -255, 255)
    tint[2] = Math.clamp(blue, -255, 255)
    tint[3] = Math.clamp(gray, 0, 255)
  }
```

---



文档生成时间：2026/1/31 13:13:58
