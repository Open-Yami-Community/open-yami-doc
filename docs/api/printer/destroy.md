---
sidebar_position: 1
title: destroy 销毁
---

## destroy

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

销毁

### 返回值

类型: `void`

### 源代码

**位置**: [第 208 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L208)

```typescript
public destroy(): void {
    if (this.images.length !== 0) {
      for (const imageElement of this.images) {
        imageElement.destroy()
      }
      this.images.length = 0
      this.images.changed = true
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
