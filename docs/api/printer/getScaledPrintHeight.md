---
sidebar_position: 1
title: getScaledPrintHeight 获取缩放后的打印高度
---

## getScaledPrintHeight

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

获取缩放后的打印高度

返回值:缩放后的打印高度

### 返回值

类型: `number`

缩放后的打印高度

### 源代码

**位置**: [第 270 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L270)

```typescript
public getScaledPrintHeight(): number {
    return this.printHeight * Printer.scale
  }
```

---



文档生成时间：2026/1/31 13:13:59
