---
sidebar_position: 1
title: appendChild 添加子元素
---

## appendChild

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

添加子元素

参数 `element`: 元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1263 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1263)

```typescript
public appendChild(element: UIElement): void {
    // 如果子元素列表添加了目标元素(过滤重复)
    if (element && this.children.append(element)) {
      // 解除子元素之前的父子关系
      element.parent?.children.remove(element)
      element.parent = this
      // 如果本元素已连接
      if (this.connected) {
        // 连接子元素并调整大小
        !element.connected &&
        element.connect()
        element.resize()
      } else {
        // 断开子元素连接
        element.connected &&
        element.disconnect()
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
