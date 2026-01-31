---
sidebar_position: 1
title: setStartPositionCircle 设置初始位置 - 圆形发射区域
---

## setStartPositionCircle

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置初始位置 - 圆形发射区域

### 返回值

类型: `void`

### 源代码

**位置**: [第 2352 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2352)

```typescript
private setStartPositionCircle(): void {
    const emitter = this.emitter
    const area = this.data.area as ParticleEmissionAreaCircle
    const pos = this.getAreaPosition()
    const x = emitter.startX + pos[0]
    const y = emitter.startY + pos[1]
    const angle = Math.random() * Math.PI * 2
    const distance = Math.random() * area.radius * emitter.scale
    this.x = x + distance * Math.cos(angle)
    this.y = y + distance * Math.sin(angle)
    this.transformStartPosition()
  }
```

---



文档生成时间：2026/1/31 13:13:58
