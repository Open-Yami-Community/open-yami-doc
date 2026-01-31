---
sidebar_position: 1
title: reset 重置打印机上下文
---

## reset

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

重置打印机上下文

返回值:当前打印机

### 返回值

类型: `this`

当前打印机

### 源代码

**位置**: [第 186 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L186)

```typescript
public reset(): this {
    this.destroy()
    this.content = ''
    this.x = 0
    this.y = 0
    this.width = 0
    this.height = 0
    this.index = 0
    this.wrapEnd = 0
    this.lineHeight = 0
    this.breakable = false
    const {fonts, styles, weights, sizes, colors, effects} = this
    if (fonts.length !== 1) this.fonts = [fonts[fonts.length - 1]]
    if (styles.length !== 1) this.styles = [styles[styles.length - 1]]
    if (weights.length !== 1) this.weights = [weights[weights.length - 1]]
    if (sizes.length !== 1) this.sizes = [sizes[sizes.length - 1]]
    if (colors.length !== 1) this.colors = [colors[colors.length - 1]]
    if (effects.length !== 1) this.effects = [effects[effects.length - 1]]
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
