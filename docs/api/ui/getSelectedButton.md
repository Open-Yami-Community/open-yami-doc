---
sidebar_position: 1
title: getSelectedButton 从按钮列表中获取选中的按钮
---

## getSelectedButton

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

从按钮列表中获取选中的按钮

参数 `focusOrButtons`: 焦点元素或按钮列表

返回值:被选中的按钮元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `focusOrButtons` | `UIElement \| Array&lt;ButtonElement&gt;` | - | - |

### 返回值

类型: `ButtonElement \| undefined`

被选中的按钮元素

### 源代码

**位置**: [第 435 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L435)

```typescript
public getSelectedButton(focusOrButtons?: UIElement | Array<ButtonElement>): ButtonElement | undefined {
    let buttons
    if (focusOrButtons instanceof UIElement) {
      if (!this.focuses.includes(focusOrButtons)) return
      buttons = this.getFocusedButtons(focusOrButtons, true)
    } else if (focusOrButtons instanceof Array) {
      buttons = focusOrButtons
    } else {
      return undefined
    }
    for (const button of buttons) {
      if (button.selected) {
        return button
      }
    }
    return undefined
  }
```

---



文档生成时间：2026/1/31 13:13:59
