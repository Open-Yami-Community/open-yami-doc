---
sidebar_position: 1
title: postProcessingCommon 后期处理 - 通用发射区域
---

## postProcessingCommon

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

后期处理 - 通用发射区域

返回值:返回false表示粒子可以被回收

### 返回值

类型: `boolean`

返回false表示粒子可以被回收

### 源代码

**位置**: [第 2408 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2408)

```typescript
private postProcessingCommon(): boolean {
    // 粒子已到达生命周期，返回false(进行回收)
    if (this.elapsed >= this.lifetime) {
      return false
    }

    // 粒子已到达淡出时间，计算不透明度
    if (this.elapsed > this.fadeoutTime) {
      const elapsed = this.elapsed - this.fadeoutTime
      const time = elapsed / this.fadeout
      this.opacity = Math.max(1 - time, 0)
      this.colorChanged = true
    }
    return true
  }
```

---



文档生成时间：2026/1/31 13:13:58
