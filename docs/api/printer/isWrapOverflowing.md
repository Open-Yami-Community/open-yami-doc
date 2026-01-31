---
sidebar_position: 1
title: isWrapOverflowing 检查包裹文本是否溢出
---

## isWrapOverflowing

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

检查包裹文本是否溢出

返回值:文本是否溢出

### 返回值

类型: `boolean`

文本是否溢出

### 源代码

**位置**: [第 695 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L695)

```typescript
public isWrapOverflowing(): boolean {
    const {content} = this
    const {length} = content
    let string = ''
    let wrapEnd = length
    outer: for (let i = this.index; i < length; i++) {
      const char = content[i]
      switch (char) {
        case ' ': case '-': case '\n': case '<':
          // 跳过重复的字符
          while (++i < length && content[i] === char) {}
          wrapEnd = i
          break outer
      }
      string += char
    }
    this.wrapEnd = wrapEnd
    return string === ''
    ? false
    : this.horizontal
    ? this.x + Printer.lineWidth + this.measureWidth(string) > this.getScaledPrintWidth()
    : this.y + Printer.lineWidth + this.measureWidth(string) > this.getScaledPrintHeight()
  }
```

---



文档生成时间：2026/1/31 13:13:59
