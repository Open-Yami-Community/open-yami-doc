---
sidebar_position: 1
title: removePointerEventRoot 移除指针事件根元素
---

## removePointerEventRoot

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

移除指针事件根元素

参数 `element`: 根元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 283 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L283)

```typescript
public removePointerEventRoot(element: UIElement) {
    if (element instanceof UIElement) {
      this.pointerEventRoots.remove(element)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
