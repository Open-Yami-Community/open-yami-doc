---
sidebar_position: 1
title: getElementAtMouse 获取鼠标位置的元素
---

## getElementAtMouse

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

获取鼠标位置的元素

返回值:元素实例

### 返回值

类型: `UIElement`

元素实例

### 源代码

**位置**: [第 338 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L338)

```typescript
public getElementAtMouse(): UIElement {
    return UI.getElementAt(Mouse.screenX, Mouse.screenY)
  }
```

---



文档生成时间：2026/1/31 13:13:59
