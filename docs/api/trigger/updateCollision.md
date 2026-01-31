---
sidebar_position: 1
title: updateCollision 更新触发器碰撞检测
---

## updateCollision

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

更新触发器碰撞检测

返回值:false表示触发器碰撞后需要销毁

### 返回值

类型: `boolean`

false表示触发器碰撞后需要销毁

### 源代码

**位置**: [第 295 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L295)

```typescript
private updateCollision(): boolean {
    // 检测与墙壁的碰撞，如果发生碰撞返回false
    if (this.detectCollisionWithWalls()) {
      return false
    }

    // 如果过去时间小于初始延时，或超时，则不会触发角色碰撞，返回true
    if (this.elapsed < this.initialDelay || this.elapsed >= this.timeout) return true

    // 获取碰撞角色列表(共享列表，用count表示长度)
    const targets = this.getActorsByCollision(this.x, this.y, this.angle, this.scale, this.shape as any)
    if (targets.count > 0) {
      // 通过选择器筛选目标角色
      Trigger.getActorsBySelector(this.caster, this.selector)

      // 更新时间列表，剔除过期角色
      this.updateHitList()

      // 通过击中模式筛选目标角色
      this.getActorsByHitMode()

      // 触发对应事件
      if (targets.count > 0) {
        const cmd1 = this.events.hitactor
        const {caster, target, skill} = this
        const {count} = targets
        for (let i = 0; i < count; i++) {
          const actor = targets[i]!
          // 更新角色受击时间戳
          actor.updateHitTimestamp()
          const cmd2 = actor.events.hittrigger
          if (cmd2 !== undefined) {
            // 发送目标角色的击中触发器事件
            const event = new EventHandler(cmd2)
            event.parent = actor
            event.triggerObject = this
            event.triggerActor = actor
            event.selfVarId = actor.selfVarId
            if (caster instanceof Actor) {
              event.casterActor = caster
            }
            if (skill instanceof Skill) {
              event.triggerSkill = skill
            }
            // 不需要对事件进行入栈和出栈
            // 不需要异步添加事件到更新器列表
            if (event.update(0) === false) {
              actor.updaters.add(event)
              event.onFinish(() => {
                Callback.push(() => {
                  actor.updaters.remove(event)
                })
              })
            }
          }
          // 同时发送脚本事件
          actor.script.getEvents('hittrigger')?.call(new ScriptTriggerHitEvent(actor, this))
          if (cmd1 !== undefined) {
            // 发送触发器的击中角色事件
            const event = new EventHandler(cmd1)
            event.parent = this
            event.triggerObject = this
            event.triggerActor = actor
            if (caster instanceof Actor) {
              event.casterActor = caster
            }
            if (target instanceof Actor) {
              event.targetActor = target
            }
            if (skill instanceof Skill) {
              event.triggerSkill = skill
            }
            // 不需要对事件进行入栈和出栈
            // 不需要异步添加事件到更新器列表
            if (event.update(0) === false) {
              actor.updaters.add(event)
              event.onFinish(() => {
                Callback.push(() => {
                  actor.updaters.remove(event)
                })
              })
            }
          }
          // 同时发送脚本事件
          this.script.getEvents('hitactor')?.call(new ScriptTriggerHitEvent(actor, this))
          // 如果击中次数不够，返回false
          if (--this.hitCount === 0) {
            return false
          }
        }
      }
    }
    return true
  }
```

---



文档生成时间：2026/1/31 13:13:59
