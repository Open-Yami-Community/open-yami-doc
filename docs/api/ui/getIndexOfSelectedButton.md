---
sidebar_position: 1
title: getIndexOfSelectedButton 获取选中按钮的索引
---

## getIndexOfSelectedButton

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

获取选中按钮的索引

参数 `focus`: 焦点元素

返回值:被选中按钮在焦点元素的按钮列表中的位置(-1: 不存在)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `focus` | `UIElement` | - | - |

### 返回值

类型: `number`

被选中按钮在焦点元素的按钮列表中的位置(-1: 不存在)

### 源代码

**位置**: [第 458 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L458)

```typescript
public getIndexOfSelectedButton(focus?: UIElement): number {
    if (focus instanceof UIElement) {
      const buttons = this.getFocusedButtons(focus, true)
      const button = this.getSelectedButton(buttons)
      if (button) return buttons.indexOf(button)
    }
    return -1
  }
```

---



文档生成时间：2026/1/31 13:13:59
