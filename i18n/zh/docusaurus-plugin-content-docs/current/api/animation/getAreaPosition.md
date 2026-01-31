---
sidebar_position: 1
title: getAreaPosition 获取区域位置
---

## getAreaPosition

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

获取区域位置

### 返回值

类型: `Float64Array`

### 源代码

**位置**: [第 2315 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2315)

```typescript
private getAreaPosition(): Float64Array {
    const array = ParticleElement.sharedFloat64Array
    const emitter = this.emitter
    const area = this.data.area as ParticleEmissionAreaPoint | ParticleEmissionAreaRectangle | ParticleEmissionAreaCircle
    const cos = Math.cos(emitter.angle)
    const sin = Math.sin(emitter.angle)
    const x = area.x * emitter.scale
    const y = area.y * emitter.scale
    array[0] = x * cos - y * sin
    array[1] = x * sin + y * cos
    return array
  }
```

---



文档生成时间：2026/1/31 13:13:58
