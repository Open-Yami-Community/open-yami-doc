---
sidebar_position: 1
title: removeFocus 移除焦点
---

## removeFocus

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

移除焦点

参数 `element`: 将被从焦点列表中移除的元素实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 401 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L401)

```typescript
public removeFocus(element: UIElement): void {
    if (this.focuses.remove(element)) {
      this.restoreFocusedButtons(element)
      const focuses = this.focuses
      const focus = focuses[focuses.length - 1]
      this.getSelectedButton(focus)?.updateDisplayMode()
      element.emit('blur', element, false)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
