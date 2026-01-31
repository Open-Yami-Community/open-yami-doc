---
sidebar_position: 1
title: loadPresets 加载预设对象
---

## loadPresets

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

加载预设对象

### 返回值

类型: `void`

### 源代码

**位置**: [第 160 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L160)

```typescript
private loadPresets(): void {
    const presets = this.presets
    // 加载场景对象目录
    const load = (nodes: SceneObjectDataDirectory, scene: SceneFile) => {
      for (const node of nodes) {
        if (node.class === 'folder') {
          load(node.children, scene)
        } else {
          node.scene = scene
          presets[node.presetId] = node
          Data.compileEvents(node, `${scene.path}\n@ ${node.name}.${node.presetId}`)
          switch (node.class) {
            case 'actor':
              loadActor(node)
              break
            case 'animation':
              loadAnimation(node)
              break
            case 'particle':
              loadParticle(node)
              break
          }
          if (node.class !== 'actor') {
            Data.filterScripts(node.scripts)
          }
        }
      }
    }
    // 加载角色
    const loadActor = (node: SceneActorData) => {
      const actorId = node.actorId
      let data = Data.actors[actorId]
      if (data !== undefined) {
        // 修改角色数据，添加场景预设的事件和脚本
        const proxy: ActorFile = Object.create(data)
        proxy.events = node.events
        proxy.scripts = node.scripts
        Object.setPrototypeOf(node.events, data.events)
        if (node.type === 'global') {
          node.scripts.length = 0
        }
        Data.mergeScripts(node.scripts, data.scripts)
        node.data = proxy
      }
    }
    // 加载动画
    const loadAnimation = (node: SceneAnimationData) => {
      node.motion = Enum.getValue(node.motion)
      const data = Data.animations[node.animationId]
      if (data !== undefined) {
        node.data = data
      }
    }
    // 加载粒子
    const loadParticle = (node: SceneParticleData) => {
      const data = Data.particles[node.particleId]
      if (data !== undefined) {
        node.data = data
      }
    }
    // 加载所有场景的预设对象
    for (const scene of Object.values(Data.scenes) as Array<SceneFile>) {
      load(scene.objects, scene)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
