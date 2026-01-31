---
sidebar_position: 1
title: inheritEventContext 继承事件上下文
---

## inheritEventContext

**类型**: `MethodDeclaration`

**所属类**: `EventHandler`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

继承事件上下文

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `EventHandler` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 584 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L584)

```typescript
public inheritEventContext(event: EventHandler): void {
    this.attributes = event.attributes
    if ('priority' in event) {
      this.priority = event.priority
    }
    for (const key of EventHandler.inheritedKeys) {
      // 继承事件上下文属性
      if (key in event) {
        (this as any)[key] = (event as any)[key]
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
