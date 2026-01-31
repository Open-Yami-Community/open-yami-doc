---
sidebar_position: 1
title: checkIfRemovedHover 检查是否移除了hover元素
---

## checkIfRemovedHover

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

检查是否移除了hover元素

参数 `element`: 被移除的元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 367 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L367)

```typescript
public checkIfRemovedHover(element: UIElement): void {
    let hover = this.eventHover
    // 如果删除的元素包含了hover元素
    // 删除前触发相关元素的鼠标离开事件
    if (hover && element.contains(hover)) {
      this.eventHover = null
      const event = Mouse.eventCache
      const parent = element.parent
      do {
        hover.emit('mouseleave', event, false)
        hover = hover.parent
      } while (hover && hover !== parent)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
