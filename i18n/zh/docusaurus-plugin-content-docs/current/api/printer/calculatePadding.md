---
sidebar_position: 1
title: calculatePadding 计算纹理内边距
---

## calculatePadding

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

计算纹理内边距

### 返回值

类型: `void`

### 源代码

**位置**: [第 313 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L313)

```typescript
public calculatePadding(): void {
    const context = this.context
    const effect = this.effects[0]
    const {paddingItalic} = context
    const {paddingVertical} = context
    switch (effect.type) {
      case 'none':
        // 文字效果：无，负数x/y将会增加左/上的内边距
        this.paddingLeft = Math.max(paddingItalic / 4 - this.x, this.paddingLeft)
        this.paddingTop = Math.max(paddingVertical - this.y, this.paddingTop)
        this.paddingRight = Math.max(paddingItalic, this.paddingRight)
        this.paddingBottom = Math.max(paddingVertical, this.paddingBottom)
        break
      case 'shadow': {
        // 文字效果：阴影，根据阴影偏移方向来增加内边距
        const shadowOffsetX = effect.shadowOffsetX * Printer.scale
        const shadowOffsetY = effect.shadowOffsetY * Printer.scale
        const shadowOffsetLeft = Math.max(-shadowOffsetX, 0)
        const shadowOffsetTop = Math.max(-shadowOffsetY, 0)
        const shadowOffsetRight = Math.max(shadowOffsetX, 0)
        const shadowOffsetBottom = Math.max(shadowOffsetY, 0)
        this.paddingLeft = Math.max(shadowOffsetLeft + paddingItalic / 4 - this.x, this.paddingLeft)
        this.paddingTop = Math.max(shadowOffsetTop + paddingVertical - this.y, this.paddingTop)
        this.paddingRight = Math.max(shadowOffsetRight + paddingItalic, this.paddingRight)
        this.paddingBottom = Math.max(shadowOffsetBottom + paddingVertical, this.paddingBottom)
        break
      }
      case 'stroke': {
        // 文字效果：描边，上下左右增加描边宽度一半的内边距
        const halfWidth = Math.ceil(effect.strokeWidth / 2) * Printer.scale
        this.paddingLeft = Math.max(halfWidth + paddingItalic / 4 - this.x, this.paddingLeft)
        this.paddingTop = Math.max(halfWidth + paddingVertical - this.y, this.paddingTop)
        this.paddingRight = Math.max(halfWidth + paddingItalic, this.paddingRight)
        this.paddingBottom = Math.max(halfWidth + paddingVertical, this.paddingBottom)
        break
      }
      case 'outline': {
        // 文字效果：轮廓，上下左右增加1px的内边距
        const offset = Printer.scale
        this.paddingLeft = Math.max(offset + paddingItalic / 4 - this.x, this.paddingLeft)
        this.paddingTop = Math.max(offset + paddingVertical - this.y, this.paddingTop)
        this.paddingRight = Math.max(offset + paddingItalic, this.paddingRight)
        this.paddingBottom = Math.max(offset + paddingVertical, this.paddingBottom)
        break
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
