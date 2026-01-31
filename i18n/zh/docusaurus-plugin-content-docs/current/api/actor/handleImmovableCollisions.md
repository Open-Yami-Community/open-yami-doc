---
sidebar_position: 1
title: handleImmovableCollisions 处理不可推动碰撞
---

## handleImmovableCollisions

**类型**: `MethodDeclaration`

**所属类**: `ActorCollider`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

处理不可推动碰撞

### 返回值

类型: `void`

### 源代码

**位置**: [第 1542 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1542)

```typescript
public handleImmovableCollisions(): void {
    const self = this.actor
    if (self.collider.weight === 0)
    {
      return
    }
    const ox = self.x
    const oy = self.y
    const half = this.half
    const expansion = Scene.binding!.maxColliderHalf
    // 获取探测范围所在的角色区间列表
    const cells = Scene.actor.partition.get(
      ox - half - expansion,
      oy - half - expansion,
      ox + half + expansion,
      oy + half + expansion,
    )
    const count = cells.count
    // 查找所有角色区间
    for (let i = 0; i < count; i++) {
      const actors = cells[i]!
      const length = actors.length
      // 查找区间中的所有角色
      for (let i = 0; i < length; i++) {
        const actor = actors[i] as Actor
        if (actor !== self && actor.collider.immovable) {
          ActorCollider.handleCollisionBetweenTwoActors(self, actor, 1)
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
