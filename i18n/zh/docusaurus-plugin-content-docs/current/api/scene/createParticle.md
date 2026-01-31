---
sidebar_position: 1
title: createParticle 创建粒子
---

## createParticle

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建粒子

参数 `node`: 预设粒子数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `node` | `SceneParticleData` | - | - |

### 返回值

类型: `SceneParticleEmitter \| undefined`

### 源代码

**位置**: [第 1293 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1293)

```typescript
public createParticle(node: SceneParticleData): SceneParticleEmitter | undefined {
    const data = node.data
    if (data) {
      const emitter = new SceneParticleEmitter(data, node)
      emitter.selfVarId = node.presetId
      this.emitter.append(emitter)
      return Scene.latest = emitter
    }
    return undefined
  }
```

---



文档生成时间：2026/1/31 13:13:59
