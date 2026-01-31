---
sidebar_position: 1
title: update 更新粒子的运动
---

## update

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

更新粒子的运动

参数 `deltaTime`: 增量时间(毫秒)

返回值:返回false表示粒子可以被回收

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `boolean`

返回false表示粒子可以被回收

### 源代码

**位置**: [第 2119 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2119)

```typescript
public update(deltaTime: number): boolean {
    // 计算当前帧新的粒子位置
    this.elapsed += deltaTime
    this.scaleSpeed += this.scaleAccel * deltaTime
    this.scaleFactor += this.scaleSpeed * deltaTime
    this.rotationSpeed += this.rotationAccel * deltaTime
    this.rotationAngle += this.rotationSpeed * deltaTime
    this.movementSpeedX += this.movementAccelX * deltaTime
    this.movementSpeedY += this.movementAccelY * deltaTime
    this.anchorX += this.anchorSpeedX * deltaTime
    this.anchorY += this.anchorSpeedY * deltaTime
    this.x += this.movementSpeedX * deltaTime
    this.y += this.movementSpeedY * deltaTime

    // 计算水平旋转
    this.hRotationExpansionSpeed += this.hRotationExpansionAccel * deltaTime
    this.hRotationRadius += this.hRotationExpansionSpeed * deltaTime
    this.hRotationAngularSpeed += this.hRotationAngularAccel * deltaTime
    this.hRotationAngle += this.hRotationAngularSpeed * deltaTime
    const hRotationOffset = this.hRotationRadius * Math.cos(this.hRotationAngle)
    const hRotationOffsetX = hRotationOffset * Math.cos(this.globalAngle)
    const hRotationOffsetY = hRotationOffset * Math.sin(this.globalAngle)
    this.x += hRotationOffsetX - this.hRotationOffsetX
    this.y += hRotationOffsetY - this.hRotationOffsetY
    this.hRotationOffsetX = hRotationOffsetX
    this.hRotationOffsetY = hRotationOffsetY

    // 计算精灵帧
    switch (this.spriteMode) {
      case 'random':
        break
      case 'animation':
        if (this.spriteFrame < this.spriteCount - 1 &&
          (this.spriteElapsed += deltaTime) >= this.spriteInterval) {
          this.spriteElapsed -= this.spriteInterval
          this.spriteFrame++
          this.updateSpriteFrame()
        }
        break
      case 'animation-loop':
        if ((this.spriteElapsed += deltaTime) >= this.spriteInterval) {
          this.spriteElapsed -= this.spriteInterval
          this.spriteFrame = (this.spriteFrame + 1) % this.spriteCount
          this.updateSpriteFrame()
        }
        break
    }

    // 更新颜色
    this.updateColor()

    // 后期处理
    return this.postProcessing()
  }
```

---



文档生成时间：2026/1/31 13:13:58
