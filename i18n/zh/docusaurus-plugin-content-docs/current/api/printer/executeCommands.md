---
sidebar_position: 1
title: executeCommands 执行绘制指令
---

## executeCommands

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

执行绘制指令

### 返回值

类型: `void`

### 源代码

**位置**: [第 643 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L643)

```typescript
public executeCommands(): void {
    const context = this.context
    const commands = this.commands
    const length = commands.length
    const horizontal = this.horizontal
    const paddingLeft = this.paddingLeft
    const paddingTop = this.paddingTop
    const letterSpacing = this.getScaledLetterSpacing()
    const charWidths = Printer.charWidths
    let charIndex = 0
    for (let i = 0; i < length; i++) {
      const command = commands[i]
      const string = command.string
      const drawingMethod = command.drawingMethod
      // 调整打印机指令的打印位置
      command.x += paddingLeft
      command.y += paddingTop
      if (horizontal) {
        // 打印水平方向的文字
        if (letterSpacing !== 0) {
          // 如果设置了字间距，逐个打印字符
          const length = string.length
          for (let i = 0; i < length; i++) {
            const charWidth = charWidths[charIndex++]
            drawingMethod(context, command, string[i])
            command.x += charWidth + letterSpacing
          }
        } else {
          // 如果没有设置字间距，一次性打印字符串
          drawingMethod(context, command, string)
        }
      } else {
        // 打印垂直方向的文字，逐个打印字符
        const size = command.size
        const length = string.length
        for (let i = 0; i < length; i++) {
          drawingMethod(context, command, string[i])
          command.y += size + letterSpacing
        }
      }
    }
    this.commands.length = 0
    this.texture.loadImage(this.canvas)

    // 重置指令池
    Printer.resetCommands()
  }
```

---



文档生成时间：2026/1/31 13:13:59
