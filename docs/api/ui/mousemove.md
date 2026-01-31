---
sidebar_position: 1
title: mousemove 鼠标移动事件
---

## mousemove

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

鼠标移动事件

参数 `event`: 脚本鼠标事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptMouseEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 907 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L907)

```typescript
private mousemove(event: ScriptMouseEvent): void {
    const last = UI.eventHover
    const hover = UI.getElementAtMouse()
    if (last !== hover) {
      if (last !== null && !last.contains(hover)) {
        let element: UIElement | null = last
        do {
          element.emit('mouseleave', event, false)
          element = element.parent
        } while (element?.contains(hover) === false)
      }
      if (hover !== null && !hover.contains(last)) {
        let element: UIElement | null = hover
        do {
          element.emit('mouseenter', event, false)
          element = element.parent
        } while (element?.contains(last) === false)
      }
      UI.eventHover = hover
    }
    hover.emit('mousemove', event, true)
    UI._updateBubbleState(hover)
  }
```

---



文档生成时间：2026/1/31 13:13:59
