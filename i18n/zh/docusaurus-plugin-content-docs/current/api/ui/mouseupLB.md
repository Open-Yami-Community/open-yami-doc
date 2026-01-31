---
sidebar_position: 1
title: mouseupLB 鼠标左键弹起事件
---

## mouseupLB

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

鼠标左键弹起事件

参数 `event`: 脚本鼠标事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptMouseEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 881 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L881)

```typescript
private mouseupLB(event: ScriptMouseEvent): void {
    const target = UI.getElementAtMouse()
    target.emit('mouseupLB', event, true)
    if (UI.eventTarget?.contains(target)) {
      Input.bubbles.push(true)
      target.emit('click', event, true)
      Input.bubbles.pop()
    }
    UI.eventTarget = null
    UI._updateBubbleState(target)
  }
```

---



文档生成时间：2026/1/31 13:13:59
