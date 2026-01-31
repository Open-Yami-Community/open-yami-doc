---
sidebar_position: 1
title: off 移除输入事件侦听器
---

## off

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

移除输入事件侦听器

参数 `type`: 输入事件类型

参数 `listener`: 回调函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `InputEventType` | - | - |
| `listener` | `EventCallback` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 184 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L184)

```typescript
public off(type: InputEventType, listener: EventCallback): void {
    const group = this.listeners[type]
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
