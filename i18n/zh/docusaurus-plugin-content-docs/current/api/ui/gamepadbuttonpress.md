---
sidebar_position: 1
title: gamepadbuttonpress 手柄按钮按下事件
---

## gamepadbuttonpress

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

手柄按钮按下事件

参数 `event`: 脚本手柄事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptGamepadEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 968 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L968)

```typescript
private gamepadbuttonpress(event: ScriptGamepadEvent): void {
    if (UI.focuses.length !== 0) {
      switch (Controller.buttonName) {
        case 'Up':
          Input.bubbles.stop()
          UI.pressDirKey('Up')
          break
        case 'Down':
          Input.bubbles.stop()
          UI.pressDirKey('Down')
          break
        case 'Left':
          Input.bubbles.stop()
          UI.pressDirKey('Left')
          break
        case 'Right':
          Input.bubbles.stop()
          UI.pressDirKey('Right')
          break
        case 'A':
          Input.bubbles.stop()
          UI.pressConfirmKey()
          break
        case 'B': {
          const element = UI.getFocus()
          if (element?.focusCancelable) {
            Input.bubbles.stop()
            UI.removeLatestFocus()
          }
          break
        }
      }
      // 有可能在前面的操作中移除了焦点
      UI.getFocus()?.emit('gamepadbuttonpress', event, false)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
