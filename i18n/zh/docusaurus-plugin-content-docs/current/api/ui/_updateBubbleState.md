---
sidebar_position: 1
title: _updateBubbleState 更新事件冒泡状态(私有)
---

## _updateBubbleState

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

更新事件冒泡状态(私有)

如果选中了UI元素

阻止事件传递到场景中

参数 `target`: 从这个元素开始向上一级更新

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `target` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 357 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L357)

```typescript
private _updateBubbleState(target: UIElement): void {
    if (target !== UI.root && target instanceof UIElement) {
      Input.bubbles.stop()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
