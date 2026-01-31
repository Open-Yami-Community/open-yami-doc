---
sidebar_position: 1
title: on 添加场景事件侦听器
---

## on

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

添加场景事件侦听器

参数 `type`: 场景事件类型

参数 `listener`: 事件回调函数

参数 `priority`: 是否将该事件设为最高优先级

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `listener` | `EventCallback` | - | - |
| `priority` | `boolean` | - | false |

### 返回值

类型: `void`

### 源代码

**位置**: [第 528 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L528)

```typescript
public on(type: string, listener: EventCallback, priority: boolean = false): void {
    const group = this.listeners[type]
    if (!group) {
      throw new Error('Invalid event type: ' + type)
    }
    if (!group.includes(listener)) {
      if (priority) {
        group.unshift(listener)
      } else {
        group.push(listener)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
