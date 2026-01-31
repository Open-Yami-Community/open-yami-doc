---
sidebar_position: 1
title: update 更新场景粒子发射器
---

## update

**类型**: `MethodDeclaration`

**所属类**: `SceneParticleEmitter`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

更新场景粒子发射器

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5432 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5432)

```typescript
public update(deltaTime: number): void {
    const al = Camera.animationLeftT
    const at = Camera.animationTopT
    const ar = Camera.animationRightT
    const ab = Camera.animationBottomT
    const x = this.x
    const y = this.y
    // 更新发射开始位置
    const manager = this.parent
    if (manager instanceof SceneParticleEmitterManager) {
      this.startX = x * manager.scene.tileWidth
      this.startY = y * manager.scene.tileHeight
    }
    // 如果粒子发射器可见，则发射新的粒子
    if (x >= al && x < ar && y >= at && y < ab || this.alwaysEmit) {
      this.emitParticles(deltaTime)
    }
    this.updateParticles(deltaTime)
    this.updaters.update(deltaTime)
  }
```

---



文档生成时间：2026/1/31 13:13:59
