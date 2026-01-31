---
sidebar_position: 1
title: reload 重新加载文本内容
---

## reload

**类型**: `MethodDeclaration`

**所属类**: `DialogBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

重新加载文本内容

### 返回值

类型: `void`

### 源代码

**位置**: [第 3744 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3744)

```typescript
private reload(): void {
    if (this.printer) {
      // 重置打印机并清除纹理
      if (this.printer.content) {
        this.printer.reset()
        this.printer.context.clear()
      }
      // 设置打印机内容，切换到更新中状态
      this.printer.content = this.content
      this.state = 'updating'
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
