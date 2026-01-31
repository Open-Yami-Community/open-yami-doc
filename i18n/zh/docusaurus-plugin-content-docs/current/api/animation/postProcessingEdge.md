---
sidebar_position: 1
title: postProcessingEdge 后期处理 - 屏幕边缘发射区域
---

## postProcessingEdge

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

后期处理 - 屏幕边缘发射区域

返回值:返回false表示粒子可以被回收

### 返回值

类型: `boolean`

返回false表示粒子可以被回收

### 源代码

**位置**: [第 2428 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2428)

```typescript
private postProcessingEdge(): boolean {
    // 粒子处于屏幕内的情况(使用上一帧的摄像机)
    const vertices = this.getBoundingRectangle()
    if (vertices[0] < Camera.scrollRight &&
      vertices[1] < Camera.scrollBottom &&
      vertices[2] > Camera.scrollLeft &&
      vertices[3] > Camera.scrollTop &&
      this.elapsed < this.lifetime) {
      // 标记为已经出现的状态
      this.appeared = true

      // 粒子已到达淡出时间，计算不透明度
      if (this.elapsed > this.fadeoutTime) {
        const elapsed = this.elapsed - this.fadeoutTime
        const time = elapsed / this.fadeout
        this.opacity = Math.max(1 - time, 0)
        this.colorChanged = true
      }
      return true
    }

    // 粒子处于屏幕外的情况
    // 若是粒子已经出现过(刚生成可能在屏幕外，给它一个出场的机会)
    // 或者时间超过500ms或生命周期
    // 则返回false(进行回收)
    if (this.appeared ||
      this.elapsed > 500 ||
      this.elapsed >= this.lifetime) {
      this.appeared = false
      return false
    }
    return true
  }
```

---



文档生成时间：2026/1/31 13:13:58
