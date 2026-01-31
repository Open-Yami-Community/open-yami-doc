---
sidebar_position: 1
title: measureWidth 测量字符串的像素宽度
---

## measureWidth

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

测量字符串的像素宽度

参数 `text`: 目标字符串

返回值:字符串的像素宽度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `text` | `string` | - | - |

### 返回值

类型: `number`

字符串的像素宽度

### 源代码

**位置**: [第 366 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L366)

```typescript
public measureWidth(text: string): number {
    if (this.horizontal) {
      // 水平方向的文本返回字符串宽度
      return this.context.measureText(text).width
    } else {
      // 垂直方向的文本返回字符串长度 * 字体大小
      return this.getScaledSize() * text.length
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
