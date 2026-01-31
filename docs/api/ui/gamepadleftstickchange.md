---
sidebar_position: 1
title: gamepadleftstickchange 手柄左摇杆改变事件
---

## gamepadleftstickchange

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

手柄左摇杆改变事件

参数 `event`: 脚本手柄事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptGamepadEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1038 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1038)

```typescript
private gamepadleftstickchange(event: ScriptGamepadEvent): void {
    const stickAngle = Controller.states.LeftStickAngle
    if (stickAngle !== -1) {
      let stickDir!: ButtonRelativeDirection
      switch (Math.floor(Math.modDegrees(stickAngle + 45) / 90)) {
        case 0:
          stickDir = 'Right'
          break
        case 1:
          stickDir = 'Down'
          break
        case 2:
          stickDir = 'Left'
          break
        case 3:
          stickDir = 'Up'
          break
      }
      // 临时添加stickDir属性
      if (UI.stickDir !== stickDir) {
        UI.stickDir = stickDir
        UI.pressDirKey(stickDir)
      }
    } else if (UI.stickDir) {
      UI.releaseDirKey(UI.stickDir)
      UI.stickDir = ''
    }
    UI.getFocus()?.emit('gamepadleftstickchange', event, false)
  }
```

---



文档生成时间：2026/1/31 13:13:59
