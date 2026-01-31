---
sidebar_position: 1
title: horizontalGridResize 水平网格 - 重新调整窗口元素
---

## horizontalGridResize

**类型**: `MethodDeclaration`

**所属类**: `WindowElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

水平网格 - 重新调整窗口元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `this` | `WindowElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 6040 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L6040)

```typescript
private static horizontalGridResize(this: WindowElement): void {
    if (!this.visible) return
    this.calculatePosition()
    const {children} = this
    const {length} = children
    // 如果不存在子元素，返回
    if (length === 0) {
      this.columns = 0
      this.rows = 0
      return
    }
    const {proxy} = this
    const {floor, ceil, max} = Math
    const {gridWidth, gridHeight, gridGapX, gridGapY, paddingX, paddingY} = this
    const unitWidth = gridWidth + gridGapX
    const unitHeight = gridHeight + gridGapY
    // 如果单元宽度是0，全部子元素放在同一行，否则计算行数和列数
    const columns = unitWidth === 0 ? length
    : max(floor((this.width + gridGapX - paddingX * 2) / unitWidth), 1)
    const rows = ceil(length / columns)
    // 计算滚动区域大小
    const scrollHeight = rows * unitHeight - gridGapY + paddingY * 2
    this.scrollWidth = max(this.width, gridWidth)
    this.scrollHeight = max(this.height, scrollHeight)
    this.columns = columns
    this.rows = rows
    // 如果滚动区域发生变化，调整滚动位置
    this.scrollY = this.scrollY
    // 设置网格代理元素的大小和矩阵
    proxy.width = gridWidth
    proxy.height = gridHeight
    proxy.matrix = this.matrix
    proxy.opacity = this.opacity
    // 设置网格代理元素开始位置
    const sx = this.x - this.scrollX + paddingX
    const sy = this.y - this.scrollY + paddingY
    for (let i = 0; i < length; i++) {
      const element = children[i]
      // 计算网格代理元素的具体位置
      proxy.x = sx + i % columns * unitWidth
      proxy.y = sy + floor(i / columns) * unitHeight
      // 暂时设置子元素的父元素为代理元素，然后计算位置
      element.parent = proxy
      element.resize()
      element.parent = this
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
