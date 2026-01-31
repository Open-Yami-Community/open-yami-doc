---
sidebar_position: 1
title: unloadSubscene 卸载子场景
---

## unloadSubscene

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

卸载子场景

参数 `sceneId`: 场景ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `sceneId` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1095 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1095)

```typescript
public unloadSubscene(sceneId: string): void {
    const scene = this.subscenes.find(
      scene => scene.id === sceneId
    )
    if (!scene) return
    this.subscenes.remove(scene)
    const presetIdMap: HashMap<true> = {}
    const register = (nodes: SceneObjectDataDirectory) => {
      for (const node of nodes) {
        if (node.class === 'folder') {
          register(node.children)
        } else {
          presetIdMap[node.presetId] = true
        }
      }
    }
    register(scene.objects)
    // 获取待删除对象
    // 避免写在回调函数中异步执行
    const deletedObjects: Array<any> = []
    for (const manager of [this.parallax, this.light]) {
      for (const group of manager.groups) {
        let i = group.length
        while (--i >= 0) {
          const instance = group[i]
          if (presetIdMap[instance.presetId]) {
            deletedObjects.push({instance, manager})
          }
        }
      }
    }
    for (const manager of [this.actor, this.animation, this.region, this.emitter]) {
      const list = manager.list
      let i = list.length
      while (--i >= 0) {
        const instance = list[i]
        if (presetIdMap[instance.presetId]) {
          deletedObjects.push({instance, manager})
        }
      }
    }
    Callback.push(() => {
      for (const {instance, manager} of deletedObjects) {
        instance.destroy()
        manager.remove(instance)
      }
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
