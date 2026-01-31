---
sidebar_position: 1
title: draw 绘制文本
---

## draw

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

绘制文本

参数 `content`: 文本内容

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `content` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 742 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L742)

```typescript
public draw(content: string): void {
    // 设置内容和重置索引
    this.content = content
    this.index = 0
    this.wrapEnd = 0

    // 重置内边距
    this.paddingLeft = 0
    this.paddingTop = 0
    this.paddingRight = 0
    this.paddingBottom = 0

    // 更新字体
    this.updateFont()

    const wordWrap = this.wordWrap
    const truncate = this.truncate
    const horizontal = this.horizontal
    const printWidth = this.getScaledPrintWidth()
    const printHeight = this.getScaledPrintHeight()
    const letterSpacing = this.getScaledLetterSpacing()
    const charWidths = Printer.charWidths
    const length = content.length
    let charIndex = 0
    let charWidth = 0

    // 按顺序检查字符
    while (this.index < length) {
      // 匹配标签
      const char = content[this.index]
      if (char === '<' && this.matchTag()) {
        continue
      }

      // 换行符
      if (char === '\n') {
        this.drawBuffer()
        this.newLine()
        this.index += 1
        continue
      }

      // 包裹文本溢出
      if (wordWrap && Printer.wordWrap === 'keep' && this.index >= this.wrapEnd && this.isWrapOverflowing()) {
        this.drawBuffer()
        this.newLine()
        continue
      }

      // 截断模式：高度溢出时跳出循环
      if (truncate && (horizontal
      ? this.y + Math.max(this.lineHeight, this.measureHeight(char)) > printHeight
      : this.x + Math.max(this.lineHeight, this.measureHeight(char)) > printWidth)) {
        this.drawBuffer()
        break
      }

      // 换行模式：宽度溢出时强制换行(但至少绘制一个字符)
      if (wordWrap && (horizontal
      ? this.x + Printer.lineWidth + (charWidth = this.measureWidth(char)) > printWidth
      : this.y + Printer.lineWidth + (charWidth = this.measureWidth(char)) > printHeight) && (
        this.breakable || this.buffer.length !== 0)) {
        this.drawBuffer()
        this.newLine()
        continue
      }

      // 如果设置了字间距
      if (letterSpacing !== 0) {
        if (wordWrap === false) {
          charWidth = this.measureWidth(char)
        }
        // 记录字符宽度
        charWidths[charIndex++] = charWidth
        // 加上字间距
        Printer.lineWidth += letterSpacing
      }
      // 加上字符宽度(存在字间距或换行模式才会计算字符宽度)
      Printer.lineWidth += charWidth

      // 放入缓冲字符串
      this.buffer += char
      this.index += 1
    }

    // 绘制缓冲字符串
    this.drawBuffer()

    // 调整文本区域大小(减去字间距)
    if (horizontal) {
      this.width = Math.max(this.width - letterSpacing, 0)
    } else {
      this.height = Math.max(this.height - letterSpacing, 0)
    }
    // 调整打印机纹理大小，限制尺寸(超过会报错)
    const width = Math.min(Math.ceil(this.width + this.paddingLeft + this.paddingRight), GL.maxTexSize)
    const height = Math.min(Math.ceil(this.height + this.paddingTop + this.paddingBottom), GL.maxTexSize)
    this.context.resize(width, height)

    // 计算文本位置
    this.calculateTextPosition()

    // 执行打印机指令进行绘制
    this.executeCommands()
  }
```

---



文档生成时间：2026/1/31 13:13:59
