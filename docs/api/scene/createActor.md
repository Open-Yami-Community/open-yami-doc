---
sidebar_position: 1
title: createActor 创建角色
---

## createActor

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建角色

参数 `node`: 预设角色数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `node` | `SceneActorData` | - | - |

### 返回值

类型: `Actor \| undefined`

### 源代码

**位置**: [第 1230 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1230)

```typescript
public createActor(node: SceneActorData): Actor | undefined {
    const data = node.data
    if (data) {
      Actor.enableCreateEvent = false
      let enableCreateEvent = true
      let actor: Actor
      switch (node.type) {
        case 'local':
          actor = new Actor(data)
          actor.name = node.name
          actor.presetId = node.presetId
          actor.selfVarId = node.presetId
          actor.setPosition(node.x, node.y)
          break
        case 'global': {
          let globalActor = ActorManager.get(node.actorId)
          if (globalActor) {
            enableCreateEvent = false
          } else {
            globalActor = ActorManager.create(node.actorId)!
          }
          globalActor.setSceneActorData(node)
          globalActor.transferToScene(node.x, node.y)
          actor = globalActor
          break
        }
      }
      actor.setTeam(node.teamId)
      actor.updateAngle(Math.radians(node.angle))
      if (node.scale !== 1) {
        actor.setScale(node.scale * data.scale)
      }
      this.actor.append(actor)
      Actor.enableCreateEvent = true
      if (enableCreateEvent) {
        actor.emit('create')
      }
      return Scene.latest = actor
    }
    return undefined
  }
```

---



文档生成时间：2026/1/31 13:13:59
