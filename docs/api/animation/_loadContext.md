---
sidebar_position: 1
title: _loadContext 加载动画图层上下文
---

## _loadContext

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

加载动画图层上下文

参数 `animation`: 动画播放器实例

参数 `layers`: 动画图层列表

参数 `parent`: 父级动画图层

参数 `contexts`: 动画图层上下文列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `animation` | `AnimationPlayer` | - | - |
| `layers` | `Array&lt;AnimationLayer&gt;` | - | - |
| `parent` | `AnimationFrameContext \| null` | - | - |
| `contexts` | `CacheList&lt;AnimationFrameContext&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1016 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1016)

```typescript
private static _loadContext(animation: AnimationPlayer, layers: Array<AnimationLayer>, parent: AnimationFrameContext | null, contexts: CacheList<AnimationFrameContext>): void {
    for (const layer of layers) {
      let context = contexts[contexts.count]
      if (context === undefined) {
        // 新建动画图层上下文
        context = contexts[contexts.count] = {
          animation: animation,
          parent: parent,
          layer: layer,
          frame: null,
          tint: null,
          emitter: null,
          matrix: new Matrix(),
          anchorX: 0,
          anchorY: 0,
          pivotX: 0,
          pivotY: 0,
          opacity: 0,
          version: -1,
          update: AnimationPlayer.contextUpdate,
          reset: AnimationPlayer.contextReset,
        }
      }
      contexts.count++
      context!.parent = parent
      context!.layer = layer
      // 为不同类型的图层设置各自的更新方法
      switch (layer.class) {
        case 'joint':
          context!.update = AnimationPlayer.contextUpdate
          break
        case 'sprite':
          context!.update = AnimationPlayer.contextUpdateSprite
          break
        case 'particle':
          context!.update = AnimationPlayer.contextUpdateParticle
          break
        case 'sound':
          context!.update = AnimationPlayer.contextUpdateSound
          context!.version = -1
          break
      }
      // 如果是关节层，则加载子图层列表
      if (layer.class === 'joint') {
        this._loadContext(animation, layer.children, context!, contexts)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
