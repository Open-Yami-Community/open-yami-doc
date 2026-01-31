---
sidebar_position: 1
title: onMouseDownLB 鼠标左键按下事件
---

## onMouseDownLB

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

鼠标左键按下事件

### 返回值

类型: `void`

### 源代码

**位置**: [第 4507 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4507)

```typescript
public onMouseDownLB(): void {
      if (!this.button.isProtected() &&
        Input.event instanceof ScriptMouseEvent) {
        this.hover = true
        this.active = true
        UI.restoreRelatedButtons(this.button)
        this.updateButtonState()
        Input.on('mouseupLB', this.onMouseUpLB, true)
      }
    }
```

---



文档生成时间：2026/1/31 13:13:59
