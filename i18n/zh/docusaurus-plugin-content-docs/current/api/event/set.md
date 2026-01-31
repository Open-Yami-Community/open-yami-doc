---
sidebar_position: 1
title: set 设置等待时间
---

## set

**类型**: `MethodDeclaration`

**所属类**: `EventTimer`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

设置等待时间

参数 `waitingTime`: 等待时间

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `waitingTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 701 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L701)

```typescript
public set(waitingTime: number): void {
    this.duration = waitingTime
    // 设置更新函数为：计时
    this.event.update = this.tick
  }
```

---



文档生成时间：2026/1/31 13:13:59
