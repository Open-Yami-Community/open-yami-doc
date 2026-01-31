---
sidebar_position: 1
title: drawText 绘制文字
---

## drawText

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

绘制文字

参数 `context`: 2D上下文

参数 `command`: 打印机指令

参数 `text`: 文本内容

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `context` | `PrinterRenderingContext` | - | - |
| `command` | `PrinterCommand` | - | - |
| `text` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1303 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1303)

```typescript
private static drawText(context: PrinterRenderingContext, command: PrinterCommand, text: string): void {
    const x = command.x
    const y = command.y + command.size * 0.85
    context.font = command.font
    context.fillStyle = command.color
    context.globalCompositeOperation = 'source-over'
    context.fillText(text, x, y)
  }
```

---



文档生成时间：2026/1/31 13:13:59
