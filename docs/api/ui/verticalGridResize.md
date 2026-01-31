---
sidebar_position: 1
title: verticalGridResize 垂直网格 - 重新调整窗口元素
---

## verticalGridResize

**类型**: `MethodDeclaration`

**所属类**: `WindowElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

垂直网格 - 重新调整窗口元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `this` | `WindowElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 6089 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L6089)

```typescript
private static verticalGridResize(this: WindowElement): void {
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
    // 如果单元高度是0，全部子元素放在同一列，否则计算行数和列数
    const rows = unitHeight === 0 ? length
    : max(floor((this.height + gridGapY - paddingY * 2) / unitHeight), 1)
    const columns = ceil(length / rows)
    // 计算滚动区域大小
    const scrollWidth = columns * unitWidth - gridGapX + paddingX * 2
    this.scrollWidth = max(this.width, scrollWidth)
    this.scrollHeight = max(this.height, gridHeight)
    this.columns = columns
    this.rows = rows
    // 如果滚动区域发生变化，调整滚动位置
    this.scrollX = this.scrollX
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
      proxy.x = sx + floor(i / rows) * unitWidth
      proxy.y = sy + i % rows * unitHeight
      // 暂时设置子元素的父元素为代理元素，然后计算位置
      element.parent = proxy
      element.resize()
      element.parent = this
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
