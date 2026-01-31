---
sidebar_position: 1
title: printNextPage 打印下一页文字
---

## printNextPage

**类型**: `MethodDeclaration`

**所属类**: `DialogBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

打印下一页文字

### 返回值

类型: `void`

### 源代码

**位置**: [第 3783 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3783)

```typescript
public printNextPage(): void {
    if (this.printer &&
      this.state !== 'complete') {
      this.state = 'updating'
      this.printer.x = 0
      this.printer.y = 0
      this.printer.context.clear()
      this.printer.images.length = 0
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
