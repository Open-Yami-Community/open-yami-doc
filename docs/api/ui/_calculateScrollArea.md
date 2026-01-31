---
sidebar_position: 1
title: _calculateScrollArea 计算窗口滚动区域
---

## _calculateScrollArea

**类型**: `MethodDeclaration`

**所属类**: `WindowElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

计算窗口滚动区域

### 返回值

类型: `void`

### 源代码

**位置**: [第 6009 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L6009)

```typescript
private _calculateScrollArea(): void {
    const {max} = Math
    const {children} = this
    const {length} = children
    const parentWidth = this.width
    const parentHeight = this.height
    // 设置滚动区域的最小值
    let scrollWidth = this.width
    let scrollHeight = this.height
    for (let i = 0; i < length; i++) {
      // 根据子元素的变换参数估算滚动区域大小
      const {transform} = children[i]
      const sx = transform.scaleX
      const sy = transform.scaleY
      // 计算绝对位置
      const x = transform.x + transform.x2 * parentWidth
      const y = transform.y + transform.y2 * parentHeight
      // 计算绝对宽高
      const w = max(transform.width + transform.width2 * parentWidth, 0)
      const h = max(transform.height + transform.height2 * parentHeight, 0)
      scrollWidth = max(scrollWidth, x + (1 - transform.anchorX) * w * sx)
      scrollHeight = max(scrollHeight, y + (1 - transform.anchorY) * h * sy)
    }
    this.scrollWidth = scrollWidth
    this.scrollHeight = scrollHeight
    // 如果滚动区域发生变化，调整滚动位置
    this.scrollX = this.scrollX
    this.scrollY = this.scrollY
  }
```

---



文档生成时间：2026/1/31 13:13:59
