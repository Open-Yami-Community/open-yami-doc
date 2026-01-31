---
sidebar_position: 1
title: update 更新计时器
---

## update

**类型**: `MethodDeclaration`

**所属类**: `Timer`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

更新计时器

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 245 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L245)

```typescript
public static update(deltaTime: number): void {
    // 更新缩放时间的计时器
    if (Game.paused === false) {
      const {scaledTimers} = this
      let i = scaledTimers.length
      while (--i >= 0) {
        scaledTimers[i].tick(deltaTime)
      }
    }
    // 更新原生时间的计时器
    {
      const {rawTimers} = this
      const {rawDeltaTime} = Time
      let i = rawTimers.length
      while (--i >= 0) {
        rawTimers[i].tick(rawDeltaTime)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
