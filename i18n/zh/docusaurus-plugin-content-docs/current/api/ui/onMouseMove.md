---
sidebar_position: 1
title: onMouseMove 鼠标移动事件
---

## onMouseMove

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

鼠标移动事件

### 返回值

类型: `void`

### 源代码

**位置**: [第 4489 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4489)

```typescript
public onMouseMove(): void {
      if (!this.hover && !this.button.isProtected()) {
        this.hover = true
        UI.restoreRelatedButtons(this.button)
        this.updateButtonState(true)
      }
    }
```

---



文档生成时间：2026/1/31 13:13:59
