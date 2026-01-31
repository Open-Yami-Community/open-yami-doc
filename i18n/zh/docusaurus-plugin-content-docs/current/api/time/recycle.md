---
sidebar_position: 1
title: recycle 回收计时器实例到对象池
---

## recycle

**类型**: `MethodDeclaration`

**所属类**: `Timer`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

回收计时器实例到对象池

参数 `timer`: 计时器实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `timer` | `Timer` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 280 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L280)

```typescript
public static recycle(timer: Timer): void {
    const timers = this.timerPool
    if (timers.count < 100000) {
      timers[timers.count++] = timer
      timer.elapsed = 0
      timer.update = Function.empty
      timer.callback = Function.empty
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
