---
sidebar_position: 1
title: getElementAt 获取指定位置的元素
---

## getElementAt

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

获取指定位置的元素

返回值:元素实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `screenX` | `number` | - | - |
| `screenY` | `number` | - | - |

### 返回值

类型: `UIElement`

元素实例

### 源代码

**位置**: [第 346 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L346)

```typescript
public getElementAt(screenX: number, screenY: number): UIElement {
    const root = UI.getPointerEventRoot()
    return UI.find(root.children, screenX, screenY) ?? root
  }
```

---



文档生成时间：2026/1/31 13:13:59
