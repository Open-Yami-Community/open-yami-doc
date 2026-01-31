---
sidebar_position: 1
title: updateColorEasing 更新颜色 - 过渡
---

## updateColorEasing

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

更新颜色 - 过渡

### 返回值

类型: `void`

### 源代码

**位置**: [第 2539 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2539)

```typescript
private updateColorEasing(): void {
    const clamp = ParticleElement.sharedClampedArray
    const time = Math.min(this.layer.easing!.get(this.elapsed / this.lifetime), 1)
    const color = this.color
    const start = this.colorStart
    const end = this.colorEnd
    this.colorChanged = true
    // 使用clamped数组限制过渡插值的颜色范围(0-255)
    clamp[0] = start[0] * (1 - time) + end[0] * time
    clamp[1] = start[1] * (1 - time) + end[1] * time
    clamp[2] = start[2] * (1 - time) + end[2] * time
    clamp[3] = start[3] * (1 - time) + end[3] * time
    color[0] = clamp[0]
    color[1] = clamp[1]
    color[2] = clamp[2]
    color[3] = clamp[3]
  }
```

---



文档生成时间：2026/1/31 13:13:58
