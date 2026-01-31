---
sidebar_position: 1
title: updateGridPosAndCells 更新场景角色网格位置和分区
---

## updateGridPosAndCells

**类型**: `MethodDeclaration`

**所属类**: `SceneActorManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

更新场景角色网格位置和分区

### 返回值

类型: `void`

### 源代码

**位置**: [第 3751 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3751)

```typescript
private updateGridPosAndCells(): void {
    const {scene, list, partition} = this
    const {obstacle} = scene
    const {length} = list
    for (let i = 0; i < length; i++) {
      const actor = list[i]
      // 只有角色发生移动时，才更新区间
      if (actor.collider.moved) {
        actor.collider.moved = false
        // 更新上一次的位置
        actor.collider.updateLastPosition()
        // 更新角色的网格位置
        actor.updateGridPosition()
        // 更新角色的场景分区
        partition.update(actor)
        // 更新角色的障碍区域
        obstacle.update(actor)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
