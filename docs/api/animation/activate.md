---
sidebar_position: 1
title: activate 激活动画(当动画可见时)
---

## activate

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

激活动画(当动画可见时)

参数 `drawX`: 动画的场景像素X

参数 `drawY`: 动画的场景像素Y

参数 `lightX`: 动画的光线采样X

参数 `lightY`: 动画的光线采样Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `drawX` | `number` | - | - |
| `drawY` | `number` | - | - |
| `lightX` | `number` | - | - |
| `lightY` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 588 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L588)

```typescript
public activate(drawX: number, drawY: number, lightX: number, lightY: number): void {
    this.setDrawingPosition(drawX, drawY)
    this.updateFrameParameters()
    this.anchorX = lightX
    this.anchorY = lightY
  }
```

---



文档生成时间：2026/1/31 13:13:58
