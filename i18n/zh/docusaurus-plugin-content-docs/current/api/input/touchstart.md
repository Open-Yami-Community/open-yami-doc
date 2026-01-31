---
sidebar_position: 1
title: touchstart 触摸开始事件
---

## touchstart

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

触摸开始事件

参数 `event`: 触摸事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `TouchEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 414 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L414)

```typescript
private touchstart(event: TouchEvent): void {
    // 阻止移动设备浏览器长按震动(只能在这个事件中阻止)
    event.preventDefault()
    Input.emit('touchstart', new ScriptTouchEvent(event))
  }
```

---



文档生成时间：2026/1/31 13:13:59
