---
sidebar_position: 1
title: appendChildren 添加多个子元素
---

## appendChildren

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

添加多个子元素

参数 `elements`: 元素列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `elements` | `Array&lt;UIElement&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1253 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1253)

```typescript
public appendChildren(elements: Array<UIElement>): void {
    for (const element of elements) {
      this.appendChild(element)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
