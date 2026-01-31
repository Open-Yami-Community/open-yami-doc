---
sidebar_position: 1
title: calculateTextPosition 计算文本位置
---

## calculateTextPosition

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

计算文本位置

### 返回值

类型: `void`

### 源代码

**位置**: [第 524 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L524)

```typescript
private calculateTextPosition(): void {
    switch (this.direction) {
      case 'horizontal-tb':
      case 'vertical-lr':
        break
      case 'vertical-rl': {
        // 文本方向：垂直(从右到左)
        // 以下算法将文本排版(左右)翻转成(右左)
        const commands = this.commands
        const length = commands.length
        // 设置初始x为最右端位置
        let x = this.width
        let index = 0
        let lineX = Infinity
        let lineHeight = 0
        // 遍历所有打印机指令
        for (let i = 0; i < length; i++) {
          const command = commands[i]
          // 当文本的水平位置发生变化(换行)
          if (lineX !== command.x) {
            while (index < i) {
              // 上一行文本的位置 = 右侧位置 - 行高
              const command = commands[index++]
              command.x = x - lineHeight
              if (command.image) {
                command.image.startX = command.x / Printer.scale
                command.image.transform.x = command.image.startX
              }
            }
            if (lineX !== undefined) {
              // 右侧位置减去行高和行间距
              x -= command.x - lineX
            }
            // 设置上一次文本行X
            lineX = command.x
            lineHeight = 0
          }
          // 获取最大的水平宽度作为行高
          lineHeight = Math.max(lineHeight, command.horizontalWidth, command.imageWidth)
        }
        while (index < length) {
          // 最后一行文本的位置 = 右侧位置 - 行高
          const command = commands[index++]
          command.x = x - lineHeight
          if (command.image) {
            command.image.startX = command.x / Printer.scale
            command.image.transform.x = command.image.startX
          }
        }
        break
      }
    }
    if (this.horizontal) {
      // 对水平方向的文本进行水平对齐(不考虑垂直对齐)
      const factor = this.alignmentFactorX
      if (factor !== 0) {
        const commands = this.commands
        const letterSpacing = this.getScaledLetterSpacing()
        // 打印机文本区域宽度已经减去字间距调整过，加回去
        const lineWidth = this.width + letterSpacing
        let lineX = 0
        let lineY = Infinity
        // 逆序遍历打印机指令
        for (let i = commands.length - 1; i >= 0; i--) {
          const command = commands[i]
          // 当文本的垂直位置发生变化时(换行)
          // 计算当前行的水平偏移距离
          if (lineY !== command.y) {
            lineY = command.y
            lineX = factor * (
              lineWidth
            - command.x
            - command.imageSpacing
            - command.horizontalWidth
            )
          }
          command.x += lineX
          if (command.image) {
            command.image.startX += lineX / Printer.scale
            command.image.transform.x = command.image.startX
          }
        }
      }
    } else {
      // 对垂直方向的文本进行垂直对齐(不考虑水平对齐)
      const factor = this.alignmentFactorY
      if (factor !== 0) {
        const commands = this.commands
        const letterSpacing = this.getScaledLetterSpacing()
        // 打印机文本区域高度已经减去字间距调整过，加回去
        const lineWidth = this.height + letterSpacing
        let lineX = Infinity
        let lineY = 0
        // 逆序遍历打印机指令
        for (let i = commands.length - 1; i >= 0; i--) {
          const command = commands[i]
          // 当文本的水平位置发生变化时(换行)
          // 计算当前行的垂直偏移距离
          if (lineX !== command.x) {
            lineX = command.x
            lineY = factor * (
              lineWidth
            - command.y
            - command.imageSpacing
            - command.string.length
            * (command.size + letterSpacing)
            )
          }
          command.y += lineY
          if (command.image) {
            command.image.startY += lineY / Printer.scale
            command.image.transform.y = command.image.startY
          }
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
