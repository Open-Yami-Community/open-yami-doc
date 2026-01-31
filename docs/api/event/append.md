---
sidebar_position: 1
title: append 添加已激活事件处理器
---

## append

**类型**: `MethodDeclaration`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

添加已激活事件处理器

参数 `event`: 事件处理器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `EventHandler` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 289 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L289)

```typescript
public append(event: EventHandler): void {
    this.activeEvents.push(event)
    // 添加事件完成回调函数：延迟移除
    event.onFinish(() => {
      Callback.push(() => {
        this.activeEvents.remove(event)
      })
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
