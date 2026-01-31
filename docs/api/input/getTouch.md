---
sidebar_position: 1
title: getTouch 获取触摸点
---

## getTouch

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

获取触摸点

参数 `touchId`: 触摸点ID

返回值:触摸点

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `touchId` | `number` | - | - |

### 返回值

类型: `TouchPoint \| undefined`

触摸点

### 源代码

**位置**: [第 220 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L220)

```typescript
public getTouch(touchId: number): TouchPoint | undefined {
    const event = this.event
    if (event instanceof ScriptTouchEvent) {
      return event.getTouch(touchId)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
