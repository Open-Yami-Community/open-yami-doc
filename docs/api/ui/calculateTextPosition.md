---
sidebar_position: 1
title: calculateTextPosition 计算文本位置
---

## calculateTextPosition

**类型**: `MethodDeclaration`

**所属类**: `DialogBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

计算文本位置

### 返回值

类型: `void`

### 源代码

**位置**: [第 3945 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3945)

```typescript
private calculateTextPosition(): void {
    if (this.printer && this.texture) {
      const scale = Printer.scale
      this._textOuterX = this.x - this.printer.paddingLeft / scale
      this._textOuterY = this.y - this.printer.paddingTop / scale
      this._textOuterWidth = this.texture.width / scale
      this._textOuterHeight = this.texture.height / scale
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
