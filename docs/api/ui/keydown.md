---
sidebar_position: 1
title: keydown 键盘按下事件
---

## keydown

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

键盘按下事件

参数 `event`: 脚本键盘事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptKeyboardEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 707 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L707)

```typescript
private keydown(event: ScriptKeyboardEvent): void {
    if (UI.focuses.length !== 0) {
      switch (event.keyName) {
        case 'ArrowUp':
          Input.bubbles.stop()
          UI.pressDirKey('Up')
          break
        case 'ArrowDown':
          Input.bubbles.stop()
          UI.pressDirKey('Down')
          break
        case 'ArrowLeft':
          Input.bubbles.stop()
          UI.pressDirKey('Left')
          break
        case 'ArrowRight':
          Input.bubbles.stop()
          UI.pressDirKey('Right')
          break
        case 'Enter':
        case 'NumpadEnter':
        case 'Space':
          Input.bubbles.stop()
          UI.pressConfirmKey()
          break
        case 'Escape': {
          const element = UI.getFocus()
          if (element?.focusCancelable) {
            Input.bubbles.stop()
            UI.removeLatestFocus()
          }
          break
        }
      }
      // 有可能在前面的操作中移除了焦点
      UI.getFocus()?.emit('keydown', event, false)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
