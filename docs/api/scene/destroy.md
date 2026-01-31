---
sidebar_position: 1
title: destroy 销毁场景粒子发射器
---

## destroy

**类型**: `MethodDeclaration`

**所属类**: `SceneParticleEmitter`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

销毁场景粒子发射器

### 返回值

类型: `void`

### 源代码

**位置**: [第 5485 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5485)

```typescript
public destroy(): void {
    if (!this.destroyed) {
      this.emit('destroy')
      if (this.parent instanceof SceneParticleEmitterManager) {
        this.parent.remove(this)
      }
      GlobalEntityManager.remove(this)
      super.destroy()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
