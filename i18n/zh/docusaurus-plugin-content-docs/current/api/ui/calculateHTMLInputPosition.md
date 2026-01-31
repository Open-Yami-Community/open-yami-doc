---
sidebar_position: 1
title: calculateHTMLInputPosition 计算HTML输入框位置
---

## calculateHTMLInputPosition

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

计算HTML输入框位置

### 返回值

类型: `void`

### 源代码

**位置**: [第 3394 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3394)

```typescript
public calculateHTMLInputPosition(): void {
    const offsetX = this.x + this.width / 2
    const offsetY = this.y + this.height / 2
    const matrix = Matrix.instance.reset()
    // 根据屏幕是否旋转来计算矩阵
    switch (Mouse.rotated) {
      case false:
        matrix
        .translate(Mouse.left - offsetX, Mouse.top - offsetY)
        .scale(1 / Mouse.ratioX, 1 / Mouse.ratioY)
        .multiply(this.matrix)
        .translate(offsetX, offsetY)
        break
      case true:
        matrix
        .translate(Mouse.right - offsetX, Mouse.top - offsetY)
        .rotate(Math.PI / 2)
        .scale(1 / Mouse.ratioX, 1 / Mouse.ratioY)
        .multiply(this.matrix)
        .translate(offsetX, offsetY)
        break
    }
    const a = matrix[0]
    const b = matrix[1]
    const c = matrix[3]
    const d = matrix[4]
    const e = matrix[6]
    const f = matrix[7]
    // 更新影子输入框的样式，让它与元素重合
    this.input.style.left = `${this.x}px`
    this.input.style.top = `${this.y}px`
    this.input.style.width = `${this.width}px`
    this.input.style.height = `${this.height}px`
    this.input.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`
  }
```

---



文档生成时间：2026/1/31 13:13:59
