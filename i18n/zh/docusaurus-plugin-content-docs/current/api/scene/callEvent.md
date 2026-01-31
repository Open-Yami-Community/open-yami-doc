---
sidebar_position: 1
title: callEvent 调用场景粒子发射器事件
---

## callEvent

**类型**: `MethodDeclaration`

**所属类**: `SceneParticleEmitter`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

调用场景粒子发射器事件

参数 `type`: 场景粒子发射器事件类型

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5457 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5457)

```typescript
public callEvent(type: string): void {
    const commands = this.events[type]
    if (commands) {
      const event = new EventHandler(commands)
      event.triggerObject = this
      event.selfVarId = this.selfVarId
      EventHandler.call(event, this.updaters)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
