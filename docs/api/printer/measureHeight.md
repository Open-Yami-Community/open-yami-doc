---
sidebar_position: 1
title: measureHeight 测量字符串的像素高度
---

## measureHeight

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

测量字符串的像素高度

参数 `text`: 目标字符串

返回值:字符串的像素高度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `text` | `string` | - | - |

### 返回值

类型: `number`

字符串的像素高度

### 源代码

**位置**: [第 381 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L381)

```typescript
public measureHeight(text: string): number {
    if (this.horizontal) {
      // 水平方向返回字体大小
      return this.getScaledSize()
    } else {
      // 垂直方向返回最大的字符宽度
      let height = 0
      const context = this.context
      const length = text.length
      for (let i = 0; i < length; i++) {
        height = Math.max(height,
          context.measureText(text[i]).width,
        )
      }
      return height
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
