---
sidebar_position: 1
title: mousedown 鼠标按下事件
---

## mousedown

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

鼠标按下事件

参数 `event`: 脚本鼠标事件

返回值:

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptMouseEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 835 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L835)

```typescript
private mousedown(event: ScriptMouseEvent): void {
    if ((Input.event as ScriptMouseEvent).button === 2 &&
      UI.getFocus()?.focusCancelable) {
      UI.removeLatestFocus()
      Input.bubbles.stop()
      return
    }
    const target = UI.getElementAtMouse()
    target.emit('mousedown', event, true)
    UI._updateBubbleState(target)
  }
```

---



文档生成时间：2026/1/31 13:13:59
