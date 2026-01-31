---
sidebar_position: 1
title: loadData 加载场景粒子发射器列表数据
---

## loadData

**类型**: `MethodDeclaration`

**所属类**: `SceneParticleEmitterManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

加载场景粒子发射器列表数据

参数 `emitters`: 粒子存档数据列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `emitters` | `Array&lt;ParticleEmitterSaveData&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5357 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5357)

```typescript
public loadData(emitters: Array<ParticleEmitterSaveData>): void {
    const presets = Scene.presets
    for (const savedData of emitters) {
      const preset = presets[savedData.presetId]
      if (preset?.class === 'particle') {
        const data = Data.particles[preset.particleId]
        if (data) {
          // 重新创建粒子实例
          savedData.events = preset.events
          savedData.scripts = preset.scripts
          this.append(new SceneParticleEmitter(data, savedData))
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
