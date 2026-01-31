---
sidebar_position: 1
title: newLine 换行
---

## newLine

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

换行

### 返回值

类型: `void`

### 源代码

**位置**: [第 720 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L720)

```typescript
public newLine(): void {
    // 禁止头部换行和连续换行
    if (this.breakable) {
      this.breakable = false
      if (this.horizontal) {
        // 水平方向换行，垂直位置加上行高和行间距，重置水平位置、行高
        this.x = 0
        this.y += (this.lineHeight || this.getScaledSize()) + this.getScaledLineSpacing()
        this.lineHeight = 0
      } else {
        // 垂直方向换行，水平位置加上行高和行间距，重置垂直位置、行高
        this.x += (this.lineHeight || this.getScaledSize()) + this.getScaledLineSpacing()
        this.y = 0
        this.lineHeight = 0
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
