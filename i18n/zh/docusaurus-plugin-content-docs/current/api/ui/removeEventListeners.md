---
sidebar_position: 1
title: removeEventListeners 移除事件侦听器
---

## removeEventListeners

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

移除事件侦听器

### 返回值

类型: `void`

### 源代码

**位置**: [第 3138 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3138)

```typescript
private removeEventListeners(): void {
    const input = this.input
    if (!input.events) return
    for (const [type, listener] of input.events) {
      input.off(type, listener)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
