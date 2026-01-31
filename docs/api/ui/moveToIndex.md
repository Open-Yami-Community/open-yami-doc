---
sidebar_position: 1
title: moveToIndex 将元素移动到父级列表中指定的索引位置
---

## moveToIndex

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

将元素移动到父级列表中指定的索引位置

参数 `pos`: 目标索引位置(负数表示倒数第几个)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `pos` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1314 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1314)

```typescript
public moveToIndex(pos: number): void {
    const {parent} = this
    if (parent) {
      const elements = parent.children
      const length = elements.length
      // 如果索引是负数，加上列表长度
      if (pos < 0) pos += length
      if (elements[pos] !== this &&
        elements[pos] !== undefined) {
        const index = elements.indexOf(this)
        const step = index < pos ? 1 : -1
        // 移动本元素到指定的索引位置
        for (let i = index; i !== pos; i += step) {
          elements[i] = elements[i + step]
        }
        elements[pos] = this
        // 如果父元素是窗口，请求重新调整大小
        if (parent instanceof WindowElement) {
          parent.requestResizing()
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
