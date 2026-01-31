---
sidebar_position: 1
title: pointermove 指针移动事件
---

## pointermove

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

指针移动事件

参数 `event`: 指针事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `PointerEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 518 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L518)

```typescript
private pointermove(event: PointerEvent): void {
    // 在非100%缩放率的设备上，PointerEvent更好
    // PointerEvent.clientX/clientY精确到小数
    // MouseEvent.clientX/clientY精确到整数
    const scriptEvent = new ScriptMouseEvent(event)
    Mouse.calculateCoords(scriptEvent)
    Input.emit('mousemove', scriptEvent)
  }
```

---



文档生成时间：2026/1/31 13:13:59
