---
sidebar_position: 1
title: setAnimationComponent 设置动画组件
---

## setAnimationComponent

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置动画组件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{actor, animationId, motion, operation, angle, scale, speed, opacity, priority, offsetY, spriteId, image, playMotion, wait\}` | `\{
    actor\: ActorGetter
    animationId\: string
    motion\: string
    operation\: string
    angle\?\: AngleGetter
    scale\?\: number
    speed\?\: number \| VariableGetter
    opacity\?\: number
    priority\?\: number
    offsetY\?\: number
    spriteId\?\: string
    image\?\: string
    playMotion\?\: string
    wait\?\: boolean
  \}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7277 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7277)

```typescript
protected setAnimationComponent({actor, animationId, motion, operation, angle, scale, speed, opacity, priority, offsetY, spriteId, image, playMotion, wait}: {
    actor: ActorGetter
    animationId: string
    motion: string
    operation: string
    angle?: AngleGetter
    scale?: number
    speed?: number | VariableGetter
    opacity?: number
    priority?: number
    offsetY?: number
    spriteId?: string
    image?: string
    playMotion?: string
    wait?: boolean
  }): CommandFunction {
    const key = animationId + motion
    const getActor = Command.compileActor(actor)
    switch (operation) {
      case 'set-angle': {
        const getAngle = Command.compileAngle(angle!)
        return () => {
          const actor = getActor()
          const animation = actor?.animationManager.get(key)
          if (animation) animation.setAngle(getAngle(actor))
          return true
        }
      }
      case 'set-scale': {
        const getScale = Command.compileNumber(scale!)
        return () => {
          const scale = Math.clamp(getScale(), 0, 10)
          getActor()?.animationManager.setScale(key, scale)
          return true
        }
      }
      case 'set-speed': {
        const getSpeed = Command.compileNumber(speed!)
        return () => {
          const animation = getActor()?.animationManager.get(key)
          if (animation) animation.speed = Math.clamp(getSpeed(), 0, 10)
          return true
        }
      }
      case 'set-opacity': {
        const getOpacity = Command.compileNumber(opacity!)
        return () => {
          const animation = getActor()?.animationManager.get(key)
          if (animation) animation.opacity = Math.clamp(getOpacity(), 0, 1)
          return true
        }
      }
      case 'set-priority':
        return () => {
          // 补丁：2025-11-1，修改SetPriority为SetOrder
          getActor()?.animationManager.setOrder(key, priority!)
          return true
        }
      case 'set-offsetY':
        return () => {
          getActor()?.animationManager.setOffsetY(key, offsetY!)
          return true
        }
      case 'set-sprite':
        return () => {
          getActor()?.animationManager.setSprite(key, spriteId!, image!)
          return true
        }
      case 'play-motion': {
        const motionName = Enum.getValue(playMotion!)
        return () => {
          const actor = getActor()
          if (actor) {
            const animation = actor.animationManager.playMotion(key, motionName)
            if (wait && animation) {
              const event = CurrentEvent
              animation.onFinish(() => {
                event.continue()
              })
              return CurrentEvent.pause()
            }
          }
          return true
        }
      }
      case 'stop-motion':
        return () => {
          getActor()?.animationManager.stopMotion(key)
          return true
        }
    }
    throw new Error('Compiling Error')
  }
```

---



文档生成时间：2026/1/31 13:13:58
