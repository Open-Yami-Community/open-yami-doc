---
sidebar_position: 1
title: callEvent 调用元素事件
---

## callEvent

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

调用元素事件

参数 `type`: 元素事件类型

参数 `bubble`: 是否传递事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `bubble` | `boolean` | - | false |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1643 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1643)

```typescript
public callEvent(type: string, bubble: boolean = false): void {
    const commands = this.registeredEvents[type] ?? this.events[type]
    if (commands) {
      const event = new EventHandler(commands)
      event.parent = this
      event.priority = true
      event.bubble = bubble
      event.triggerElement = this
      EventHandler.call(event, this.updaters)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
