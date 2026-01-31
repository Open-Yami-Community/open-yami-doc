---
sidebar_position: 1
title: blurEvent 输入框失去焦点事件
---

## blurEvent

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

输入框失去焦点事件

### 返回值

类型: `void`

### 源代码

**位置**: [第 3086 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3086)

```typescript
private blurEvent(): void {
    if (this.focusing) {
      this.focusing = false
      // 发送失去焦点事件
      this.emit('blur')
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
