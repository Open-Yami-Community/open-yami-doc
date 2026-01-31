---
sidebar_position: 1
title: scrollToChild 滚动到能够显示子元素的位置
---

## scrollToChild

**类型**: `MethodDeclaration`

**所属类**: `WindowElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

滚动到能够显示子元素的位置

参数 `element`: 子元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5814 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5814)

```typescript
public scrollToChild(element: UIElement): void {
    const index = this.children.indexOf(element)
    if (index !== -1) {
      switch (this.layout) {
        case 'normal': {
          const left = element.x - this.x
          const top = element.y - this.y
          const right = left + element.width
          const bottom = top + element.height
          this.scrollX = Math.clamp(this.scrollX, right - this.width, left)
          this.scrollY = Math.clamp(this.scrollY, bottom - this.height, top)
          break
        }
        case 'horizontal-grid': {
          const cols = this.getVisibleGridColumns()
          if (Number.isFinite(cols)) {
            const rows = Math.floor(index / cols)
            const y = rows * (this.gridHeight + this.gridGapY) + this.paddingY
            this.scrollY = Math.clamp(this.scrollY, y + this.gridHeight - this.height, y)
          }
          break
        }
        case 'vertical-grid': {
          const rows = this.getVisibleGridRows()
          if (Number.isFinite(rows)) {
            const cols = Math.floor(index / rows)
            const x = cols * (this.gridWidth + this.gridGapX) + this.paddingX
            this.scrollX = Math.clamp(this.scrollX, x + this.gridWidth - this.width, x)
          }
          break
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
