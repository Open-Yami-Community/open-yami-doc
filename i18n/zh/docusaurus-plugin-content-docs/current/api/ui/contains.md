---
sidebar_position: 1
title: contains 判断是否包含指定元素
---

## contains

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

判断是否包含指定元素

参数 `element`: 目标元素

返回值:是否包含目标元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement \| null` | - | - |

### 返回值

类型: `boolean`

是否包含目标元素

### 源代码

**位置**: [第 1439 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1439)

```typescript
public contains(element: UIElement | null): boolean {
    while (element) {
      if (element === this) {
        return true
      }
      element = element.parent
    }
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:59
