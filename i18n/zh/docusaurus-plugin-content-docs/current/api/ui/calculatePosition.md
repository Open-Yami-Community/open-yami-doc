---
sidebar_position: 1
title: calculatePosition 使用变换参数来计算元素的实际位置
---

## calculatePosition

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

使用变换参数来计算元素的实际位置

### 返回值

类型: `void`

### 源代码

**位置**: [第 1389 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1389)

```typescript
protected calculatePosition(): void {
    // 如果元素已断开连接，返回
    if (this.connected === false) {
      return
    }

    const parent = this.parent!
    const matrix = this.matrix.set(parent.matrix)
    const transform = this.transform
    const parentWidth = parent.width
    const parentHeight = parent.height
    const x = parent.x + transform.x + transform.x2 * parentWidth
    const y = parent.y + transform.y + transform.y2 * parentHeight
    const width = Math.max(transform.width + transform.width2 * parentWidth, 0)
    const height = Math.max(transform.height + transform.height2 * parentHeight, 0)
    const anchorX = transform.anchorX * width
    const anchorY = transform.anchorY * height
    const rotation = transform.rotation
    const scaleX = transform.scaleX
    const scaleY = transform.scaleY
    const skewX = transform.skewX
    const skewY = transform.skewY
    const opacity = transform.opacity * parent.opacity

    // 写入计算值
    this.x = x - anchorX
    this.y = y - anchorY
    this.width = width
    this.height = height
    this.opacity = opacity

    // 矩阵变换：旋转
    if (rotation !== 0) {
      matrix.rotateAt(x, y, Math.radians(rotation))
    }
    // 矩阵变换：缩放
    if (scaleX !== 1 || scaleY !== 1) {
      matrix.scaleAt(x, y, scaleX, scaleY)
    }
    // 矩阵变换：倾斜
    if (skewX !== 0 || skewY !== 0) {
      matrix.skewAt(x, y, skewX, skewY)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
