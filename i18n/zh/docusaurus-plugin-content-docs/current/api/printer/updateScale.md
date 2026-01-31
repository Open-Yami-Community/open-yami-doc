---
sidebar_position: 1
title: updateScale 更新缩放率
---

## updateScale

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

更新缩放率

### 返回值

类型: `void`

### 源代码

**位置**: [第 1445 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1445)

```typescript
public static updateScale(): void {
    const HD_SCALE = 4
    const MAX_SCALE = 4
    let scale = UI.scale
    if (this.highDefinition) {
      scale = Math.max(scale, HD_SCALE)
    }
    this.scale = Math.min(scale, MAX_SCALE)
    this.updateAllPrinters()
  }
```

---



文档生成时间：2026/1/31 13:13:59
