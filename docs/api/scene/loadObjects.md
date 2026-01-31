---
sidebar_position: 1
title: loadObjects 加载初始场景对象
---

## loadObjects

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

加载初始场景对象

参数 `objectList`: 场景对象数据列表

返回值:已创建的场景对象实例列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `objectList` | `SceneObjectDataDirectory` | - | - |

### 返回值

类型: `Array&lt;PresetObject&gt;`

已创建的场景对象实例列表

### 源代码

**位置**: [第 1149 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1149)

```typescript
private loadObjects(objectList: SceneObjectDataDirectory): Array<PresetObject> {
    const scene = this
    const instances: Array<PresetObject> = []
    const loader = new class ObjectLoader {
      // 加载场景对象目录
      load = (nodes: SceneObjectDataDirectory) => {
        for (const node of nodes) {
          loader[node.class](node as any)
        }
      }

      // 加载文件夹
      folder = (node: SceneObjectFolder) => {
        loader.load(node.children)
      }

      // 加载角色
      actor = (node: SceneActorData) => {
        if (SceneContext.testConditions(node)) {
          const actor = scene.createActor(node)
          if (actor) instances.push(actor)
        }
      }

      // 加载动画
      animation = (node: SceneAnimationData) => {
        if (SceneContext.testConditions(node)) {
          const animation = scene.createAnimation(node)
          if (animation) instances.push(animation)
        }
      }

      // 加载粒子
      particle = (node: SceneParticleData) => {
        if (SceneContext.testConditions(node)) {
          const emitter = scene.createParticle(node)
          if (emitter) instances.push(emitter)
        }
      }

      // 加载区域
      region = (node: SceneRegionData) => {
        if (SceneContext.testConditions(node)) {
          const region = scene.createRegion(node)
          instances.push(region)
        }
      }

      // 加载光源
      light = (node: SceneLightData) => {
        if (SceneContext.testConditions(node)) {
          const light = scene.createLight(node)
          instances.push(light)
        }
      }

      // 加载视差图
      parallax = (node: SceneParallaxData) => {
        if (SceneContext.testConditions(node)) {
          const parallax = scene.createParallax(node)
          instances.push(parallax)
        }
      }

      // 加载瓦片地图
      tilemap = (node: SceneTilemapData) => {
        if (SceneContext.testConditions(node)) {
          const tilemap = scene.createTilemap(node)
          instances.push(tilemap)
        }
      }
    }
    // 加载场景对象
    loader.load(objectList)
    return instances
  }
```

---



文档生成时间：2026/1/31 13:13:59
