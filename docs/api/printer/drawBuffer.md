---
sidebar_position: 1
title: drawBuffer 绘制缓冲字符串
---

## drawBuffer

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

绘制缓冲字符串

### 返回值

类型: `void`

### 源代码

**位置**: [第 400 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L400)

```typescript
public drawBuffer(): void {
    const string = this.buffer

    // 如果缓冲字符串为空，返回
    if (string === '') return

    // 计算内边距
    this.calculatePadding()

    // 设置绘制指令
    const context = this.context
    const color = this.colors[0]
    const effect = this.effects[0]
    const horizontal = this.horizontal
    let measureWidth = Printer.lineWidth
    if (measureWidth === 0) {
      // 如果不存在字间距和强制换行
      // 则不会提前测量出字符串宽度
      measureWidth = this.measureWidth(string)
    }
    const measureHeight = this.measureHeight(string)
    const commands = this.commands
    const command = Printer.fetchCommand()
    // 设置打印机指令
    commands.push(command)
    command.string = string
    command.x = this.x
    command.y = this.y
    command.font = context.font
    command.size = context.size
    command.color = color
    command.effect = effect
    command.horizontalWidth = horizontal ? measureWidth : measureHeight
    command.drawingMethod = Printer[Printer.drawingMethods[effect.type]]

    // 重置行宽
    Printer.lineWidth = 0

    // 重置属性(通用)
    this.buffer = ''
    this.breakable = true
    // 根据不同的文本方向，计算下一个位置、行高、文本区域宽度、文本区域高度
    if (horizontal) {
      this.x += measureWidth
      this.lineHeight = Math.max(this.lineHeight, measureHeight)
      this.width = Math.max(this.width, this.x)
      this.height = Math.max(this.height, this.y + this.lineHeight)
    } else {
      this.y += measureWidth
      this.lineHeight = Math.max(this.lineHeight, measureHeight)
      this.width = Math.max(this.width, this.x + this.lineHeight)
      this.height = Math.max(this.height, this.y)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
