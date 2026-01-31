---
sidebar_position: 1
title: gamepadbuttonrelease 手柄按钮弹起事件
---

## gamepadbuttonrelease

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

手柄按钮弹起事件

参数 `event`: 脚本手柄事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptGamepadEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1009 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1009)

```typescript
private gamepadbuttonrelease(event: ScriptGamepadEvent): void {
    if (UI.focuses.length !== 0) {
      switch (Controller.buttonName) {
        case 'Up':
          Input.bubbles.stop()
          UI.releaseDirKey('Up')
          break
        case 'Down':
          Input.bubbles.stop()
          UI.releaseDirKey('Down')
          break
        case 'Left':
          Input.bubbles.stop()
          UI.releaseDirKey('Left')
          break
        case 'Right':
          Input.bubbles.stop()
          UI.releaseDirKey('Right')
          break
      }
      // 有可能在前面的操作中移除了焦点
      UI.getFocus()?.emit('gamepadbuttonrelease', event, false)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
