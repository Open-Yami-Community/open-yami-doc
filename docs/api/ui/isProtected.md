---
sidebar_position: 1
title: isProtected 判断按钮是否处于受保护的状态
---

## isProtected

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

判断按钮是否处于受保护的状态

返回值:处于受保护状态

### 返回值

类型: `boolean`

处于受保护状态

### 源代码

**位置**: [第 4900 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4900)

```typescript
private isProtected(): boolean {
    const focuses = UI.focuses
    const length = focuses.length
    const focus = focuses[length - 1]
    if (focus instanceof UIElement) {
      if (focus.focusMode === 'control-descendant-buttons'
      ? focus.contains(this)
      : focus === this.parent) {
        return false
      }
    }
    for (let i = length - 2; i >= 0; i--) {
      const focus = focuses[i]
      if (focus.focusMode === 'control-descendant-buttons'
      ? focus.contains(this)
      : focus === this.parent) {
        return true
      }
    }
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:59
