---
sidebar_position: 1
title: selectDefaultButton 选中默认按钮
---

## selectDefaultButton

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

选中默认按钮

### 返回值

类型: `void`

### 源代码

**位置**: [第 552 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L552)

```typescript
public selectDefaultButton(): void {
    const buttons = this.getFocusedButtons()
    // 如果没有鼠标悬停中的按钮，选中第一个按钮
    if (!this.getSelectedButton(buttons)) {
      buttons[0]?.hover(false)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
