---
sidebar_position: 1
title: onMouseLeave 鼠标离开事件
---

## onMouseLeave

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

鼠标离开事件

### 返回值

类型: `void`

### 源代码

**位置**: [第 4498 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4498)

```typescript
public onMouseLeave(): void {
      this.hover = false
      // 当指针事件根元素包含按钮时，更新按钮状态
      if (!this.button.isProtected()) {
        this.updateButtonState()
      }
    }
```

---



文档生成时间：2026/1/31 13:13:59
