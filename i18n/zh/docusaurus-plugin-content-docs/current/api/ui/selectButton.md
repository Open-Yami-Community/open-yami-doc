---
sidebar_position: 1
title: selectButton 选中按钮
---

## selectButton

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

选中按钮

参数 `button`: 按钮元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `button` | `ButtonElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 535 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L535)

```typescript
public selectButton(button: ButtonElement): void {
    if (button instanceof ButtonElement) {
      const focuses = this.focuses
      for (let i = focuses.length - 1; i >= 0; i--) {
        const focus = focuses[i]
        if (focus.focusMode === 'control-descendant-buttons'
        ? focus.contains(button)
        : focus === button.parent) {
          this.restoreFocusedButtons(focus, button)
          break
        }
      }
      button.hover()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
