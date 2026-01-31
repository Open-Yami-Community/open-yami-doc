---
sidebar_position: 1
title: addEventListeners 添加事件侦听器
---

## addEventListeners

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

添加事件侦听器

### 返回值

类型: `void`

### 源代码

**位置**: [第 3129 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3129)

```typescript
private addEventListeners(): void {
    const input = this.input
    if (!input.events) return
    for (const [type, listener] of input.events) {
      input.on(type, listener)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
