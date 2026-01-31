---
sidebar_position: 1
title: getRawY 获取原生的垂直位置
---

## getRawY

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

获取原生的垂直位置

返回值:未经缩放的Y

### 返回值

类型: `number`

未经缩放的Y

### 源代码

**位置**: [第 230 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L230)

```typescript
public getRawY(): number {
    return this.y / Printer.scale
  }
```

---



文档生成时间：2026/1/31 13:13:59
