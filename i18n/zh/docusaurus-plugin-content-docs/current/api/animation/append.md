---
sidebar_position: 1
title: append 添加粒子发射器到管理器中
---

## append

**类型**: `MethodDeclaration`

**所属类**: `AnimationParticleEmitterManager`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

添加粒子发射器到管理器中

参数 `emitter`: 粒子发射器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `emitter` | `SceneParticleEmitter` | - | - |
| `order` | `'before' \| 'after'` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1299 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1299)

```typescript
public append(emitter: SceneParticleEmitter, order: 'before' | 'after'): void {
    if (emitter.parent === null) {
      emitter.parent = this
      this.list.push(emitter)
      switch (order) {
        case 'before':
          this.backList.push(emitter)
          break
        case 'after':
          this.frontList.push(emitter)
          break
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
