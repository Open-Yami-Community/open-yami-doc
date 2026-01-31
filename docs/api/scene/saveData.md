---
sidebar_position: 1
title: saveData 保存场景粒子发射器数据
---

## saveData

**类型**: `MethodDeclaration`

**所属类**: `SceneParticleEmitter`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

保存场景粒子发射器数据

返回值:粒子存档数据

### 返回值

类型: `ParticleEmitterSaveData`

粒子存档数据

### 源代码

**位置**: [第 5507 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5507)

```typescript
public saveData(): ParticleEmitterSaveData {
    return {
      name: this.name,
      entityId: this.entityId,
      presetId: this.presetId,
      selfVarId: this.selfVarId,
      visible: this.visible,
      x: this.x,
      y: this.y,
      angle: this.angle,
      scale: this.scale,
      speed: this.speed,
      opacity: this.opacity,
      priority: this.priority,
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
