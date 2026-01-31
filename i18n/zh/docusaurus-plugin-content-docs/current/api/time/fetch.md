---
sidebar_position: 1
title: fetch 从对象池中取出计时器实例
---

## fetch

**类型**: `MethodDeclaration`

**所属类**: `Timer`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

从对象池中取出计时器实例

返回值:计时器实例

### 返回值

类型: `Timer`

计时器实例

### 源代码

**位置**: [第 269 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L269)

```typescript
public static fetch(): Timer {
    const timers = this.timerPool
    return timers.count !== 0
      ? timers[--timers.count]!
      : new Timer({ duration: 0 })
  }
```

---



文档生成时间：2026/1/31 13:13:59
