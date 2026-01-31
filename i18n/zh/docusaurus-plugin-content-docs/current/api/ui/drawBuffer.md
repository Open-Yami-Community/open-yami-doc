---
sidebar_position: 1
title: drawBuffer 绘制缓冲字符串
---

## drawBuffer

**类型**: `MethodDeclaration`

**所属类**: `DialogBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

绘制缓冲字符串

### 返回值

类型: `void`

### 源代码

**位置**: [第 3795 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3795)

```typescript
private drawBuffer(): void {
    // 当缓冲字符串不为空时绘制并记录结束位置
    if (this.printer &&
      this.printer.buffer !== '') {
      this.printer.drawBuffer()
      this.printEndX = this.printer.getRawX()
      this.printEndY = this.printer.getRawY()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
