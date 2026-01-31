---
sidebar_position: 1
title: removeLatestFocus 移除最新的焦点
---

## removeLatestFocus

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

移除最新的焦点

### 返回值

类型: `void`

### 源代码

**位置**: [第 412 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L412)

```typescript
public removeLatestFocus(): void {
    const focuses = this.focuses
    this.removeFocus(focuses[focuses.length - 1])
  }
```

---



文档生成时间：2026/1/31 13:13:59
