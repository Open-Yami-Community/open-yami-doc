---
sidebar_position: 1
title: pressConfirmKey 确定
---

## pressConfirmKey

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

确定

### 返回值

类型: `void`

### 源代码

**位置**: [第 663 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L663)

```typescript
public pressConfirmKey(): void {
    const buttons = this.getFocusedButtons()
    const button = this.getSelectedButton(buttons)
    if (button instanceof ButtonElement) {
      const pointerEvent = new PointerEvent('click', {pointerId: -1})
      const scriptEvent = new ScriptMouseEvent(pointerEvent)
      button.emit('click', scriptEvent, false)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
