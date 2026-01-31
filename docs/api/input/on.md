---
sidebar_position: 1
title: on 添加输入事件侦听器
---

## on

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

添加输入事件侦听器

参数 `type`: 输入事件类型

参数 `listener`: 回调函数

参数 `priority`: 是否将该事件设为最高优先级

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `InputEventType` | - | - |
| `listener` | `EventCallback` | - | - |
| `priority` | `boolean` | - | false |

### 返回值

类型: `void`

### 源代码

**位置**: [第 168 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L168)

```typescript
public on(type: InputEventType, listener: EventCallback, priority: boolean = false): void {
    const list = this.listeners[type]
    if (!list.includes(listener)) {
      if (priority) {
        list.unshift(listener)
      } else {
        list.push(listener)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
