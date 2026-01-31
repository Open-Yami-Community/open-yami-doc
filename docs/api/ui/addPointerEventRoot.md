---
sidebar_position: 1
title: addPointerEventRoot 添加指针事件根元素
---

## addPointerEventRoot

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

添加指针事件根元素

参数 `element`: 根元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 273 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L273)

```typescript
public addPointerEventRoot(element: UIElement) {
    if (element instanceof UIElement) {
      this.pointerEventRoots.append(element)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
