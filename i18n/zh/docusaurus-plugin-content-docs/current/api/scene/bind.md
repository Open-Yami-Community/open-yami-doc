---
sidebar_position: 1
title: bind 绑定场景上下文
---

## bind

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

绑定场景上下文

参数 `scene`: 场景上下文

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `scene` | `SceneContext \| null` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 487 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L487)

```typescript
private bind(scene: SceneContext | null): void {
    if (this.binding) {
      this.binding.enabled = false
    }
    this.binding = scene
    if (scene === null) {
      scene = this.default
    }

    // 获取场景组件和方法
    this.entity = scene.entity
    this.parallax = scene.parallax
    this.actor = scene.actor
    this.animation = scene.animation
    this.trigger = scene.trigger
    this.region = scene.region
    this.light = scene.light
    this.emitter = scene.emitter
    this.convert = scene.convert
    this.convert2f = scene.convert2f
    this.spriteRenderer.setObjectLists(
      scene.actor.list,
      scene.animation.list,
      scene.trigger.list,
      scene.emitter.list,
    )

    // 初始化场景
    if (scene !== this.default) {
      scene.initialize()
      scene.enabled = true
      GL.setAmbientLight(scene.ambient)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
