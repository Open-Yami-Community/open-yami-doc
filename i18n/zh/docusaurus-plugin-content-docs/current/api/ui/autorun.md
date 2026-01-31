---
sidebar_position: 1
title: autorun 调用自动执行事件
---

## autorun

**类型**: `MethodDeclaration`

**所属类**: `UIElementManager`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

调用自动执行事件

### 返回值

类型: `void`

### 源代码

**位置**: [第 6210 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L6210)

```typescript
private autorun(): void {
    for (let i = 0; i < this.activeCount; i++) {
      this.activeElements[i]!.emit('autorun')
      this.activeElements[i] = null
    }
    this.activeCount = 0
  }
```

---



文档生成时间：2026/1/31 13:13:59
