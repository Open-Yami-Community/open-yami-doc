---
sidebar_position: 1
title: contextUpdateParticle 上下文方法 - 更新粒子层
---

## contextUpdateParticle

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

上下文方法 - 更新粒子层

参数 `frame`: 动画图层当前帧的数据

参数 `time`: 当前帧到下一帧的过渡时间(比率)

参数 `next`: 动画图层下一帧的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `this` | `AnimationFrameContext` | - | - |
| `frame` | `AnimationParticleFrame` | - | - |
| `time` | `number` | - | - |
| `next` | `AnimationParticleFrame` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1183 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1183)

```typescript
private static contextUpdateParticle(this: AnimationFrameContext, frame: AnimationParticleFrame, time?: number, next?: AnimationParticleFrame): void {
    AnimationPlayer.contextUpdate.call(this, frame, time, next)
    // 获取或创建粒子发射器
    if (this.emitter === null) {
      const layer = this.layer as AnimationParticleLayer
      const guid = layer.particleId
      const data = Data.particles[guid]
      if (!data) return
      const position = this.animation.position
      const priority = layer.order === 'before' ? -0.1 : 0.1
      const emitter = new SceneParticleEmitter(data) as AnimationParticleEmitter
      emitter.disabled = false
      emitter.matrix = this.matrix
      emitter.priority = this.animation.priority + priority
      emitter.x = position.x
      emitter.y = position.y
      emitter.temporary = true
      this.emitter = emitter
      this.animation.emitterCount++
      const {alwaysDraw} = emitter
      if (this.animation.emitterManager) {
        this.animation.emitterManager.append(emitter, layer.order)
      } else {
        // 委托给场景粒子发射器列表进行更新
        Scene.emitter.append(emitter)
      }
      emitter.update = deltaTime => {
        // 偏移已激活粒子
        if (layer.position === 'relative') {
          let ox = position.x - emitter.x
          let oy = position.y - emitter.y
          if (emitter.parent instanceof SceneParticleEmitterManager) {
            ox *= emitter.parent.scene.tileWidth
            oy *= emitter.parent.scene.tileHeight
          }
          emitter.translateParticles(ox, oy)
        }
        // 同步发射器和动画的位置
        if (!this.animation.isUIComponent) {
          emitter.x = position.x
          emitter.y = position.y
        }
        // 更新粒子优先级
        emitter.priority = this.animation.priority + priority
        // 更新已激活粒子
        const speed = this.animation.speed
        const count = emitter.updateParticles(deltaTime * speed)
        this.animation.existParticles = true
        if (count === 0 && emitter.disabled) {
          Callback.push(() => {
            const parent = emitter.parent as SceneParticleEmitterManager | AnimationParticleEmitterManager | null
            parent?.remove(emitter)
            emitter.destroy()
          })
        }
        // 只要存在粒子，总是进行绘制
        if (alwaysDraw === false) {
          emitter.alwaysDraw = count !== 0
        }
      }
    }
    const emitter = this.emitter
    // 获取当前动画帧的属性
    let scale = frame.scale * this.animation.scale
    let speed = frame.speed
    if (next !== undefined) {
      // 与下一帧属性进行插值计算
      const reverse = 1 - time!
      scale = scale * reverse + next.scale * time!
      speed = speed * reverse + next.speed * time!
    }
    emitter.scale = scale
    emitter.speed = speed
    emitter.opacity = this.opacity
  }
```

---



文档生成时间：2026/1/31 13:13:58
