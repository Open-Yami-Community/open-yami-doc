---
sidebar_position: 1
title: print 打印文字
---

## print

**类型**: `MethodDeclaration`

**所属类**: `DialogBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

打印文字

### 返回值

类型: `void`

### 源代码

**位置**: [第 3806 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3806)

```typescript
private print(): void {
    let count = Infinity
    if (this.interval !== 0) {
      this.elapsed += Time.rawDeltaTime
      // 如果存在打印间隔，计算当前帧可打印字符数量
      if (count = Math.floor(this.elapsed / this.interval)) {
        this.elapsed -= this.interval * count
      } else {
        return
      }
    }
    const printer = this.printer!
    const content = printer.content
    const printWidth = printer.getScaledPrintWidth()
    const printHeight = printer.getScaledPrintHeight()
    const letterSpacing = printer.getScaledLetterSpacing()
    const charWidths = Printer.charWidths
    const length = content.length
    let charIndex = 0
    let charWidth = 0

    // 创建指令列表
    printer.commands = []

    // 更新字体
    printer.updateFont()

    // 按顺序检查字符
    while (printer.index < length) {
      // 匹配标签(在数量检查之前解析掉尾部标签)
      const char = content[printer.index]
      if (char === '<' && printer.matchTag()) {
        continue
      }

      // 检查待打印文字数量
      if (count === 0) {
        break
      }

      // 换行符
      if (char === '\n') {
        this.drawBuffer()
        printer.newLine()
        printer.index += 1
        continue
      }

      // 库存文本溢出
      if (Printer.wordWrap === 'keep' && printer.index >= printer.wrapEnd && printer.isWrapOverflowing()) {
        this.drawBuffer()
        printer.newLine()
        continue
      }

      // 跳出循环
      if (printer.y + Math.max(printer.lineHeight, printer.measureHeight(char)) > printHeight) {
        this.drawBuffer()
        this.state = 'waiting'
        break
      }

      // 强制换行
      if (printer.x + Printer.lineWidth + (charWidth = printer.measureWidth(char)) > printWidth) {
        this.drawBuffer()
        printer.newLine()
        continue
      }

      // 计算字间距相关数据
      if (letterSpacing !== 0) {
        charWidths[charIndex++] = charWidth
        Printer.lineWidth += letterSpacing
      }
      Printer.lineWidth += charWidth

      // 放入缓冲区
      printer.buffer += char
      printer.index += 1
      count--
    }

    // 设置完成状态
    if (printer.index === length) {
      this.state = 'complete'
    }

    // 绘制缓冲字符串
    this.drawBuffer()

    // 执行打印机指令进行绘制
    printer.executeCommands()
  }
```

---



文档生成时间：2026/1/31 13:13:59
