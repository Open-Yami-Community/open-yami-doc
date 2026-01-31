---
sidebar_position: 1
title: setPrintArea 设置打印区域
---

## setPrintArea

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

设置打印区域

参数 `width`: 矩形宽度

参数 `height`: 矩形高度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `width` | `number` | - | - |
| `height` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 279 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L279)

```typescript
public setPrintArea(width: number, height: number): void {
    this.printWidth = width
    this.printHeight = height
  }
```

---



文档生成时间：2026/1/31 13:13:59
