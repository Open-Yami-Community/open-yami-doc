---
sidebar_position: 1
title: fetchCommand 获取打印机指令
---

## fetchCommand

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

获取打印机指令

返回值:打印机指令

### 返回值

类型: `PrinterCommand`

打印机指令

### 源代码

**位置**: [第 1248 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1248)

```typescript
private static fetchCommand(): PrinterCommand {
    const count = this.commandCount
    const command = this.commands[count]
    if (command !== undefined) {
      // 如果当前位置存在指令，返回
      this.commandCount++
      return command
    } else {
      // 创建新的打印机指令
      const command: PrinterCommand = {
        string: '',
        x: 0,
        y: 0,
        font: '',
        size: 0,
        color: '',
        effect: null,
        image: null,
        imageWidth: 0,
        imageHeight: 0,
        imageSpacing: 0,
        horizontalWidth: 0,
        drawingMethod: Function.empty,
      }
      // 如果缓存指令数量未满，添加到指令池
      if (count < this.commandMaximum) {
        this.commands[count] = command
        this.commandCount++
      }
      return command
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
