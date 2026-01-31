---
sidebar_position: 1
title: remove 从管理器中移除粒子发射器
---

## remove

**类型**: `MethodDeclaration`

**所属类**: `AnimationParticleEmitterManager`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

从管理器中移除粒子发射器

参数 `emitter`: 粒子发射器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `emitter` | `SceneParticleEmitter` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1318 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1318)

```typescript
public remove(emitter: SceneParticleEmitter): void {
    if (emitter.parent === this) {
      emitter.parent = null
      this.list.remove(emitter)
      this.frontList.remove(emitter) ||
      this.backList.remove(emitter)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
