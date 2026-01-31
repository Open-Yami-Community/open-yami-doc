---
sidebar_position: 1
title: callEvent 调用触发器事件
---

## callEvent

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

调用触发器事件

参数 `type`: 触发器事件类型

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 437 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L437)

```typescript
public callEvent(type: string): void {
    const commands = this.events[type]
    if (commands) {
      const event = new EventHandler(commands)
      event.parent = this
      event.triggerObject = this
      if (this.caster instanceof Actor) {
        event.triggerActor = this.caster
        event.casterActor = this.caster
      }
      if (this.target instanceof Actor) {
        event.targetActor = this.target
      }
      if (this.skill instanceof Skill) {
        event.triggerSkill = this.skill
      }
      EventHandler.call(event, this.updaters)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
