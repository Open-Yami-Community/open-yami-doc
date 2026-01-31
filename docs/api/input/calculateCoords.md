---
sidebar_position: 1
title: calculateCoords 计算坐标
---

## calculateCoords

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

计算坐标

参数 `event`: 指针事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptMouseEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 617 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L617)

```typescript
private calculateCoords(event: ScriptMouseEvent): void {
    const {clientX, clientY} = event.browserMouseEvent
    const {x, y} = this.convertClientToScreenCoords(clientX, clientY)
    this.screenX = x
    this.screenY = y
    this.eventCache = event
    this.calculateSceneCoords()
  }
```

---



文档生成时间：2026/1/31 13:13:59
