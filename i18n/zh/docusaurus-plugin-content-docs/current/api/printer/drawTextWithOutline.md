---
sidebar_position: 1
title: drawTextWithOutline 绘制带轮廓线的文字
---

## drawTextWithOutline

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

绘制带轮廓线的文字

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

**位置**: [第 1360 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1360)

```typescript
private static drawTextWithOutline(context: PrinterRenderingContext, command: PrinterCommand, text: string): void {
    const x = command.x
    const y = command.y + command.size * 0.85
    const effect = command.effect as TextEffectOutline
    const offset = Printer.scale
    context.font = command.font
    context.fillStyle = effect.color
    context.fillText(text, x - offset, y)
    context.fillText(text, x + offset, y)
    context.fillText(text, x, y - offset)
    context.fillText(text, x, y + offset)
    context.fillStyle = command.color
    context.fillText(text, x, y)
  }
```

---



文档生成时间：2026/1/31 13:13:59
