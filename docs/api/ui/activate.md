---
sidebar_position: 1
title: activate 准备激活第一次添加到管理器中的元素
---

## activate

**类型**: `MethodDeclaration`

**所属类**: `UIElementManager`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

准备激活第一次添加到管理器中的元素

参数 `element`: 元素实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 6205 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L6205)

```typescript
private activate(element: UIElement): void {
    this.activeElements[this.activeCount++] = element
  }
```

---



文档生成时间：2026/1/31 13:13:59
