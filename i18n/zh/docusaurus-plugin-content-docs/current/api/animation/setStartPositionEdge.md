---
sidebar_position: 1
title: setStartPositionEdge 设置初始位置 - 屏幕边缘发射区域
---

## setStartPositionEdge

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置初始位置 - 屏幕边缘发射区域

参数 `movementAngle`: 初始移动角度(弧度)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `movementAngle` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2369 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2369)

```typescript
private setStartPositionEdge(movementAngle: number): void {
    // 计算屏幕边缘的位置(使用上一帧的摄像机)
    const scrollLeft = Camera.scrollLeft
    const scrollTop = Camera.scrollTop
    const scrollRight = Camera.scrollRight
    const scrollBottom = Camera.scrollBottom
    const width = scrollRight - scrollLeft
    const height = scrollBottom - scrollTop
    const weightX = Math.abs(Math.sin(movementAngle) * width)
    const weightY = Math.abs(Math.sin(movementAngle - Math.PI / 2) * height)
    const threshold = weightX / (weightX + weightY)
    const random = Math.random()
    if (random < threshold) {
      // 从屏幕水平位置(上边或下边)生成粒子
      const forward = this.movementSpeedY >= 0
      this.x = scrollLeft + random / threshold * width
      this.y = forward ? scrollTop : scrollBottom
      const vertices = this.getBoundingRectangle()
      this.x -= (vertices[0] + vertices[2]) / 2 - this.x
      this.y -= forward
      ? vertices[3] - this.y
      : vertices[1] - this.y
    } else {
      // 从屏幕垂直位置(左边或右边)生成粒子
      const forward = this.movementSpeedX >= 0
      this.y = scrollTop + (random - threshold) / (1 - threshold) * height
      this.x = forward ? scrollLeft : scrollRight
      const vertices = this.getBoundingRectangle()
      this.y -= (vertices[1] + vertices[3]) / 2 - this.y
      this.x -= forward
      ? vertices[2] - this.x
      : vertices[0] - this.x
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
