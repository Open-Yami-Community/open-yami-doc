---
sidebar_position: 1
title: insertBefore 插入子元素到目标元素前面
---

## insertBefore

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

插入子元素到目标元素前面

参数 `element`: 新插入的元素

参数 `destination`: 目标位置的元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement` | - | - |
| `destination` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1288 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1288)

```typescript
public insertBefore(element: UIElement, destination: UIElement): void {
    if (!element) return
    const pos = this.children.indexOf(destination)
    if (pos !== -1 && !this.children.includes(element)) {
      this.children.splice(pos, 0, element)
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
