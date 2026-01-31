---
sidebar_position: 1
title: addFocus 添加焦点
---

## addFocus

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

添加焦点

参数 `element`: 将被设为焦点的元素实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 386 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L386)

```typescript
public addFocus(element: UIElement): void {
    if (element instanceof UIElement &&
      this.focuses.append(element)) {
      const focuses = this.focuses
      const focus = focuses[focuses.length - 2]
      this.getSelectedButton(focus)?.updateDisplayMode()
      this.selectDefaultButton()
      element.emit('focus', element, false)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
