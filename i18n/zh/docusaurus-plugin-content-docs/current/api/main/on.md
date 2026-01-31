---
sidebar_position: 1
title: on 添加游戏事件侦听器
---

## on

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

添加游戏事件侦听器

参数 `type`: 游戏事件类型

参数 `listener`: 回调函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `GameEventType` | - | - |
| `listener` | `EventCallback` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 187 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L187)

```typescript
public on(type: GameEventType, listener: EventCallback): void {
    this.listeners[type].append(listener)
  }
```

---



文档生成时间：2026/1/31 13:13:59
