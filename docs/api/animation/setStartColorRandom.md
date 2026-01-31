---
sidebar_position: 1
title: setStartColorRandom 设置初始颜色 - 随机
---

## setStartColorRandom

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置初始颜色 - 随机

### 返回值

类型: `void`

### 源代码

**位置**: [第 2513 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2513)

```typescript
private setStartColorRandom(): void {
    const {min, max} = this.data.color as ParticleColorRandom
    const {color} = this
    this.colorChanged = true
    color[0] = Math.randomBetween(min[0], max[0])
    color[1] = Math.randomBetween(min[1], max[1])
    color[2] = Math.randomBetween(min[2], max[2])
    color[3] = Math.randomBetween(min[3], max[3])
  }
```

---



文档生成时间：2026/1/31 13:13:58
