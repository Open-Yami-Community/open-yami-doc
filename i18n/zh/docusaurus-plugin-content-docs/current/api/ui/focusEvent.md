---
sidebar_position: 1
title: focusEvent 输入框获得焦点事件
---

## focusEvent

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

输入框获得焦点事件

### 返回值

类型: `void`

### 源代码

**位置**: [第 3075 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3075)

```typescript
private focusEvent(): void {
    if (!this.focusing) {
      this.focusing = true
      this._cursorVisible = true
      this._cursorElapsed = 0
      // 发送获得焦点事件
      this.emit('focus')
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
