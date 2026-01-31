---
sidebar_position: 1
title: measure 测量区域光源的外接矩形(用于做绘制条件判断)
---

## measure

**类型**: `MethodDeclaration`

**所属类**: `SceneLight`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

测量区域光源的外接矩形(用于做绘制条件判断)

### 返回值

类型: `void`

### 源代码

**位置**: [第 5028 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5028)

```typescript
private measure(): void {
    // 如果类型不是区域光源，返回
    if (this.type !== 'area') return
    const width = this.width
    const height = this.height
    const anchorOffsetX = width * this.anchorX
    const anchorOffsetY = height * this.anchorY
    const a = -anchorOffsetX
    const b = -anchorOffsetY
    const c = a + width
    const d = b + height
    const angle = this._angle
    const angle1 = Math.atan2(b, a) + angle
    const angle2 = Math.atan2(b, c) + angle
    const angle3 = Math.atan2(d, c) + angle
    const angle4 = Math.atan2(d, a) + angle
    const distance1 = Math.sqrt(a * a + b * b)
    const distance2 = Math.sqrt(c * c + b * b)
    const distance3 = Math.sqrt(c * c + d * d)
    const distance4 = Math.sqrt(a * a + d * d)
    const x1 = Math.cos(angle1) * distance1
    const x2 = Math.cos(angle2) * distance2
    const x3 = Math.cos(angle3) * distance3
    const x4 = Math.cos(angle4) * distance4
    const y1 = Math.sin(angle1) * distance1
    const y2 = Math.sin(angle2) * distance2
    const y3 = Math.sin(angle3) * distance3
    const y4 = Math.sin(angle4) * distance4
    this.anchorOffsetX = anchorOffsetX
    this.anchorOffsetY = anchorOffsetY
    this.measureOffsetX = Math.min(x1, x2, x3, x4)
    this.measureOffsetY = Math.min(y1, y2, y3, y4)
    this.measureWidth = Math.max(Math.abs(x1 - x3), Math.abs(x2 - x4))
    this.measureHeight = Math.max(Math.abs(y1 - y3), Math.abs(y2 - y4))
  }
```

---



文档生成时间：2026/1/31 13:13:59
