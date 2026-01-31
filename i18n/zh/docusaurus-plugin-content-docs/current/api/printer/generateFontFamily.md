---
sidebar_position: 1
title: generateFontFamily 生成字体家族
---

## generateFontFamily

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

生成字体家族

参数 `firstFont`: 主要字体的名称

返回值:字体家族字符串

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `firstFont` | `string` | - | - |

### 返回值

类型: `string`

字体家族字符串

### 源代码

**位置**: [第 1429 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1429)

```typescript
public static generateFontFamily(firstFont: string): string {
    return firstFont ? `${firstFont}, ${this.font}` : this.font
  }
```

---



文档生成时间：2026/1/31 13:13:59
