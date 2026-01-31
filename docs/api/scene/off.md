---
sidebar_position: 1
title: off 移除场景事件侦听器(未使用)
---

## off

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

移除场景事件侦听器(未使用)

参数 `type`: 场景事件类型

参数 `listener`: 事件回调函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `listener` | `EventCallback` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 547 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L547)

```typescript
public off(type: string, listener: EventCallback): void {
    const group = this.listeners[type]
    if (!group) {
      throw new Error('Invalid event type: ' + type)
    }
    const index = group.indexOf(listener)
    if (index !== -1) {
      const replacer = () => {}
      group[index] = replacer
      Callback.push(() => {
        group.remove(replacer)
      })
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
