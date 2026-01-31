---
sidebar_position: 1
title: getRawX 获取原生的水平位置
---

## getRawX

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

获取原生的水平位置

返回值:未经缩放的X

### 返回值

类型: `number`

未经缩放的X

### 源代码

**位置**: [第 222 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L222)

```typescript
public getRawX(): number {
    return this.x / Printer.scale
  }
```

---



文档生成时间：2026/1/31 13:13:59
