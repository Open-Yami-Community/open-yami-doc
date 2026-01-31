---
sidebar_position: 1
title: touchend 触摸结束事件
---

## touchend

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

触摸结束事件

参数 `event`: 触摸事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `TouchEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 432 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L432)

```typescript
private touchend(event: TouchEvent): void {
    const scriptEvent = new ScriptTouchEvent(event)
    Input.emit('touchend', scriptEvent)
    ScriptTouchEvent.deleteChangedTargets(scriptEvent)
  }
```

---



文档生成时间：2026/1/31 13:13:59
