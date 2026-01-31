---
sidebar_position: 1
title: setStartColorEasing 设置初始颜色 - 过渡
---

## setStartColorEasing

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置初始颜色 - 过渡

### 返回值

类型: `void`

### 源代码

**位置**: [第 2524 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2524)

```typescript
private setStartColorEasing(): void {
    const {startMin, startMax, endMin, endMax} = this.data.color as ParticleColorEasing
    const start = this.colorStart
    const end = this.colorEnd
    start[0] = Math.randomBetween(startMin[0], startMax[0])
    start[1] = Math.randomBetween(startMin[1], startMax[1])
    start[2] = Math.randomBetween(startMin[2], startMax[2])
    start[3] = Math.randomBetween(startMin[3], startMax[3])
    end[0] = Math.randomBetween(endMin[0], endMax[0])
    end[1] = Math.randomBetween(endMin[1], endMax[1])
    end[2] = Math.randomBetween(endMin[2], endMax[2])
    end[3] = Math.randomBetween(endMin[3], endMax[3])
  }
```

---



文档生成时间：2026/1/31 13:13:58
