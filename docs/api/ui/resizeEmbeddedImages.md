---
sidebar_position: 1
title: resizeEmbeddedImages 调整内嵌图像元素
---

## resizeEmbeddedImages

**类型**: `MethodDeclaration`

**所属类**: `DialogBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

调整内嵌图像元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 3956 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3956)

```typescript
private resizeEmbeddedImages(): void {
    const printer = this.printer
    if (printer?.images.changed) {
      printer.images.changed = false
      for (const image of printer.images) {
        image.parent = this
        image.connected = true
        image.resize()
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
