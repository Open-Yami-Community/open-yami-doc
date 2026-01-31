---
sidebar_position: 1
title: doubleclick 鼠标双击事件
---

## doubleclick

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

鼠标双击事件

参数 `event`: 鼠标事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `MouseEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 552 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L552)

```typescript
private doubleclick(event: MouseEvent): void {
    if (!event.cmdOrCtrlKey &&
      !event.altKey &&
      !event.shiftKey) {
      switch (event.button) {
        case 0: {
          // 用鼠标按下事件来模拟鼠标双击事件
          // 原生的鼠标双击事件在第二次弹起时触发
          // 而模拟的在第二次按下时触发，手感更好
          // 要求：按键间隔<500ms，抖动偏移<4px
          if (Mouse.doubleclickCache !== null &&
            event.timeStamp - Mouse.doubleclickCache.timeStamp < 500 &&
            Math.abs(event.clientX - Mouse.doubleclickCache.clientX) < 4 &&
            Math.abs(event.clientY - Mouse.doubleclickCache.clientY) < 4) {
            Input.emit('doubleclick', new ScriptMouseEvent(event))
            Mouse.doubleclickCache = null
          } else {
            Mouse.doubleclickCache = event
          }
          break
        }
        default:
          Mouse.doubleclickCache = null
          break
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
