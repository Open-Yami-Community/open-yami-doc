---
sidebar_position: 1
title: pointerleave 指针离开事件
---

## pointerleave

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

指针离开事件

参数 `event`: 指针事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `PointerEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 541 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L541)

```typescript
private pointerleave(event: PointerEvent): void {
    if (Mouse.entered) {
      Mouse.entered = false
      Input.emit('mouseleave', new ScriptMouseEvent(event))
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
