---
sidebar_position: 1
title: wait 事件等待指定时间
---

## wait

**类型**: `MethodDeclaration`

**所属类**: `EventHandler`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

事件等待指定时间

参数 `duration`: 等待时间(毫秒)

返回值:中断指令的执行

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `duration` | `number` | - | - |

### 返回值

类型: `false`

中断指令的执行

### 源代码

**位置**: [第 530 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L530)

```typescript
public wait(duration: number): false {
    this.getTimer().set(duration)
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:59
