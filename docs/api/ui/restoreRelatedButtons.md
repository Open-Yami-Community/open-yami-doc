---
sidebar_position: 1
title: restoreRelatedButtons 恢复相关的按钮
---

## restoreRelatedButtons

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

恢复相关的按钮

参数 `button`: 按钮元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `button` | `ButtonElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 522 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L522)

```typescript
public restoreRelatedButtons(button: ButtonElement): void {
    for (const focus of this.focuses) {
      if (focus.contains(button)) {
        this.restoreFocusedButtons(focus, button)
        return
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
