---
sidebar_position: 1
title: getFocusedButtons 获取聚焦的按钮列表
---

## getFocusedButtons

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

获取聚焦的按钮列表

参数 `focus`: 焦点元素

参数 `allowActive`: 按钮正在被按下时，返回空列表

返回值:焦点元素相关的按钮列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `focus` | `UIElement \| null` | - | null |
| `allowActive` | `boolean` | - | false |

### 返回值

类型: `Array&lt;ButtonElement&gt;`

焦点元素相关的按钮列表

### 源代码

**位置**: [第 473 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L473)

```typescript
public getFocusedButtons(focus: UIElement | null = null, allowActive: boolean = false): Array<ButtonElement> {
    if (!focus) {
      const focuses = this.focuses
      const length = focuses.length
      if (length === 0) {
        return Array.empty
      }
      focus = focuses[length - 1]
    }
    let invalid = false
    const fetch = (elements: Array<UIElement>, mode: FocusMode) => {
      for (const element of elements) {
        if (element instanceof ButtonElement) {
          // 如果按钮正在被按下，返回空列表
          if (allowActive === false &&
            element.state === 'active') {
            invalid = true
            return
          }
          buttons.push(element)
        }
        if (mode === 'control-descendant-buttons') {
          fetch(element.children, mode)
        }
      }
    }
    const buttons: Array<ButtonElement> = []
    fetch(focus.children, focus.focusMode!)
    return invalid ? Array.empty : buttons
  }
```

---



文档生成时间：2026/1/31 13:13:59
