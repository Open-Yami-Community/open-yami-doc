---
sidebar_position: 1
title: restoreFocusedButtons 恢复聚焦的按钮
---

## restoreFocusedButtons

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

恢复聚焦的按钮

参数 `focus`: 焦点元素

参数 `exclusion`: 排除的按钮元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `focus` | `UIElement \| null` | - | null |
| `exclusion` | `ButtonElement \| null` | - | null |

### 返回值

类型: `void`

### 源代码

**位置**: [第 509 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L509)

```typescript
private restoreFocusedButtons(focus: UIElement | null = null, exclusion: ButtonElement | null = null): void {
    const buttons = this.getFocusedButtons(focus, true)
    for (const button of buttons) {
      if (button !== exclusion) {
        button.restore()
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
