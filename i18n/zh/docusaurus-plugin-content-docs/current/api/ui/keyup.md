---
sidebar_position: 1
title: keyup 键盘弹起事件
---

## keyup

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

键盘弹起事件

参数 `event`: 脚本键盘事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptKeyboardEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 750 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L750)

```typescript
private keyup(event: ScriptKeyboardEvent): void {
    const focused = UI.focuses.length !== 0
    switch ((Input.event as ScriptKeyboardEvent).keyName) {
      case 'ArrowUp':
        focused && Input.bubbles.stop()
        UI.releaseDirKey('Up')
        break
      case 'ArrowDown':
        focused && Input.bubbles.stop()
        UI.releaseDirKey('Down')
        break
      case 'ArrowLeft':
        focused && Input.bubbles.stop()
        UI.releaseDirKey('Left')
        break
      case 'ArrowRight':
        focused && Input.bubbles.stop()
        UI.releaseDirKey('Right')
        break
    }
    // 有可能在前面的操作中移除了焦点
    UI.getFocus()?.emit('keyup', event, false)
  }
```

---



文档生成时间：2026/1/31 13:13:59
