---
sidebar_position: 1
title: emit 发送输入事件
---

## emit

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

发送输入事件

参数 `type`: 输入事件类型

参数 `params`: 传递参数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `InputEventType` | - | - |
| `event` | `InputScriptEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 201 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L201)

```typescript
public emit(type: InputEventType, event: InputScriptEvent): void {
    this.event = event
    this.bubbles.push(true)
    for (const listener of this.listeners[type]) {
      if (this.bubbles.get()) {
        listener(event)
        continue
      }
      break
    }
    this.bubbles.pop()
    this.event = null
  }
```

---



文档生成时间：2026/1/31 13:13:59
