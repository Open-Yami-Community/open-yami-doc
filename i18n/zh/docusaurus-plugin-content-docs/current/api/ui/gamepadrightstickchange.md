---
sidebar_position: 1
title: gamepadrightstickchange 手柄右摇杆改变事件
---

## gamepadrightstickchange

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

手柄右摇杆改变事件

参数 `event`: 脚本手柄事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptGamepadEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1072 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1072)

```typescript
private gamepadrightstickchange(event: ScriptGamepadEvent): void {
    UI.getFocus()?.emit('gamepadrightstickchange', event, false)
  }
```

---



文档生成时间：2026/1/31 13:13:59
