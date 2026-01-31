---
sidebar_position: 1
title: show 显示元素
---

## show

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

显示元素

返回值:当前元素

### 返回值

类型: `this`

当前元素

### 源代码

**位置**: [第 3330 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3330)

```typescript
public show(): this {
    if (!this.visible) {
      this.visible = true

      this.resize()
    }
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
