---
sidebar_position: 1
title: initialize 初始化粒子元素
---

## initialize

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

初始化粒子元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 2049 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2049)

```typescript
public initialize(): void {
    const {emitter} = this
    const {lifetime, lifetimeDev, fadeout, anchor, rotation, hRotation, movement, scale, sprite} = this.data

    // 计算初始属性
    this.elapsed = 0
    this.lifetime = lifetime + lifetimeDev * (Math.random() * 2 - 1)
    this.fadeout = fadeout
    this.fadeoutTime = this.lifetime - fadeout
    this.globalAngle = emitter.angle
    this.scaleFactor = ParticleElement.getRandomParameter(scale.factor) * emitter.scale
    this.scaleSpeed = ParticleElement.getRandomParameter(scale.speed) / 1e3 * emitter.scale
    this.scaleAccel = ParticleElement.getRandomParameter(scale.accel) / 1e6 * emitter.scale
    this.anchorX = ParticleElement.getRandomParameter(anchor.x)
    this.anchorY = ParticleElement.getRandomParameter(anchor.y)
    this.anchorSpeedX = ParticleElement.getRandomParameter(anchor.speedX) / 1e3
    this.anchorSpeedY = ParticleElement.getRandomParameter(anchor.speedY) / 1e3
    this.rotationAngle = Math.radians(ParticleElement.getRandomParameter(rotation.angle)) + emitter.angle
    this.rotationSpeed = Math.radians(ParticleElement.getRandomParameter(rotation.speed)) / 1e3
    this.rotationAccel = Math.radians(ParticleElement.getRandomParameter(rotation.accel)) / 1e6
    this.hRotationOffsetX = 0
    this.hRotationOffsetY = 0
    this.hRotationRadius = ParticleElement.getRandomParameter(hRotation.radius) * emitter.scale
    this.hRotationExpansionSpeed = ParticleElement.getRandomParameter(hRotation.expansionSpeed) * emitter.scale / 1e3
    this.hRotationExpansionAccel = ParticleElement.getRandomParameter(hRotation.expansionAccel) * emitter.scale / 1e6
    this.hRotationAngle = Math.radians(ParticleElement.getRandomParameter(hRotation.angle))
    this.hRotationAngularSpeed = Math.radians(ParticleElement.getRandomParameter(hRotation.angularSpeed)) / 1e3
    this.hRotationAngularAccel = Math.radians(ParticleElement.getRandomParameter(hRotation.angularAccel)) / 1e6
    const movementAngle = Math.radians(ParticleElement.getRandomParameter(movement.angle)) + emitter.angle
    const movementSpeed = ParticleElement.getRandomParameter(movement.speed) * emitter.scale / 1e3
    this.movementSpeedX = movementSpeed * Math.cos(movementAngle)
    this.movementSpeedY = movementSpeed * Math.sin(movementAngle)
    const movementAccelAngle = Math.radians(ParticleElement.getRandomParameter(movement.accelAngle)) + emitter.angle
    const movementAccel = ParticleElement.getRandomParameter(movement.accel) * emitter.scale / 1e6
    this.movementAccelX = movementAccel * Math.cos(movementAccelAngle)
    this.movementAccelY = movementAccel * Math.sin(movementAccelAngle)
    this.opacity = 1
    this.spriteMode = sprite.mode
    this.spriteHframes = sprite.hframes
    this.spriteVframes = sprite.vframes
    this.spriteInterval = sprite.interval
    this.spriteElapsed = 0
    this.spriteCount = sprite.hframes * sprite.vframes

    // 设置初始精灵帧
    switch (this.spriteMode) {
      case 'random':
        this.spriteFrame = Math.floor(Math.random() * this.spriteCount)
        this.updateSpriteFrame()
        break
      case 'animation':
      case 'animation-loop':
        this.spriteFrame = 0
        this.spriteX = 0
        this.spriteY = 0
        break
    }

    // 设置初始位置
    this.setStartPosition(movementAngle)

    // 设置初始颜色
    this.setStartColor()
  }
```

---



文档生成时间：2026/1/31 13:13:58
