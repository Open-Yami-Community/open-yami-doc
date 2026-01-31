---
sidebar_position: 1
title: drawChildren 绘制所有子元素
---

## drawChildren

**类型**: `MethodDeclaration`

**所属类**: `WindowElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

绘制所有子元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 5921 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5921)

```typescript
protected drawChildren(): void {
    if (this.overflow === 'visible') {
      return super.drawChildren()
    }
    switch (this.layout) {
      case 'normal':
        return super.drawChildren()
      case 'horizontal-grid': {
        const unitWidth = this.gridWidth + this.gridGapX
        const unitHeight = this.gridHeight + this.gridGapY
        if (unitWidth * unitHeight === 0) {
          return super.drawChildren()
        }
        const children = this.children
        const scrollTop = this.scrollY - this.paddingY
        const scrollBottom = scrollTop + this.height
        const startRow = Math.floor(scrollTop / unitHeight)
        const endRow = Math.ceil(scrollBottom / unitHeight)
        const start = Math.max(startRow * this.columns, 0)
        const end = Math.min(endRow * this.columns, children.length)
        for (let i = start; i < end; i++) {
          children[i].draw()
        }
        break
      }
      case 'vertical-grid': {
        const unitWidth = this.gridWidth + this.gridGapX
        const unitHeight = this.gridHeight + this.gridGapY
        if (unitWidth * unitHeight === 0) {
          return super.drawChildren()
        }
        const children = this.children
        const scrollLeft = this.scrollX - this.paddingX
        const scrollRight = scrollLeft + this.width
        const startCol = Math.floor(scrollLeft / unitWidth)
        const endCol = Math.ceil(scrollRight / unitWidth)
        const start = Math.max(startCol * this.rows, 0)
        const end = Math.min(endCol * this.rows, children.length)
        for (let i = start; i < end; i++) {
          children[i].draw()
        }
        break
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
