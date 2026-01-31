---
sidebar_position: 1
title: append 添加场景粒子发射器到管理器中
---

## append

**类型**: `MethodDeclaration`

**所属类**: `SceneParticleEmitterManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

添加场景粒子发射器到管理器中

参数 `emitter`: 场景粒子发射器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `emitter` | `SceneParticleEmitter` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5285 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5285)

```typescript
public append(emitter: SceneParticleEmitter): void {
    if (emitter.parent === null) {
      emitter.parent = this
      this.list.push(emitter)
      this.scene.entity.add(emitter)
      if (this.scene.enabled) {
        // 可能不是场景粒子发射器
        emitter.autorun?.()
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
