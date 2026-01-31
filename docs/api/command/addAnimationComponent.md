---
sidebar_position: 1
title: addAnimationComponent 添加动画组件
---

## addAnimationComponent

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

添加动画组件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{actor, animationId, motion, rotatable, syncAngle, priority, offsetY\}` | `\{
    actor\: ActorGetter
    animationId\: string
    motion\: string
    rotatable\: boolean
    syncAngle\: boolean
    priority\: number
    offsetY\: number
  \}` | - | - |

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 7242 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7242)

```typescript
protected addAnimationComponent({actor, animationId, motion, rotatable, syncAngle, priority, offsetY}: {
    actor: ActorGetter
    animationId: string
    motion: string
    rotatable: boolean
    syncAngle: boolean
    priority: number
    offsetY: number
  }): CommandFunction | null {
    syncAngle = syncAngle ?? false // 补丁
    offsetY = offsetY ?? 0 // 补丁
    const animData = Data.animations[animationId]
    if (!animData) return null
    const key = animationId + motion
    const getActor = Command.compileActor(actor)
    const motionName = Enum.getValue(motion)
    return () => {
      const actor = getActor()
      if (actor) {
        const animation = new AnimationPlayer(animData)
        if (animation.setMotion(motionName)) {
          animation.playing = false
          animation.defaultMotion = motionName
          animation.rotatable = rotatable
          animation.syncAngle = syncAngle
          animation.order = priority
          animation.offsetY = offsetY
          actor.animationManager.set(key, animation)
        }
      }
      return true
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
