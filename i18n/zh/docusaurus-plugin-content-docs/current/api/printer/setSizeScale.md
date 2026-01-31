---
sidebar_position: 1
title: setSizeScale 设置文字缩放系数
---

## setSizeScale

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

设置文字缩放系数

参数 `scale`: 文字缩放系数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `scale` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1437 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1437)

```typescript
public static setSizeScale(scale: number): void {
    if (this.sizeScale !== scale) {
      this.sizeScale = scale
      this.updateAllPrinters()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
