---
sidebar_position: 1
title: transition 过渡(异步)
---

## transition

**类型**: `MethodDeclaration`

**所属类**: `Flow`

**定义位置**: [`flow.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts)

### 描述

过渡(异步)

参数 `start`: 初始值

参数 `end`: 结束值

参数 `easingKey`: 过渡曲线的键

参数 `duration`: 过渡持续时间

参数 `update`: 更新函数(每帧执行一次)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `start` | `number` | - | - |
| `end` | `number` | - | - |
| `easingKey` | `string` | - | - |
| `duration` | `number` | - | - |
| `update` | `(interpolation\: number) =&gt; void` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 194 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts#L194)

```typescript
public transition(start: number, end: number, easingKey: string, duration: number, update: (interpolation: number) => void): Promise<void> {
    return new Promise(resolve => {
      const easing = Easing.get(easingKey)
      const timer = Timer.fetch().add()
      timer.mode = 'scaled'
      timer.duration = duration
      timer.update = timer => {
        if (this.verify()) {
          const time = easing.get(timer.elapsed / timer.duration)
          update(start * (1 - time) + end * time)
        } else {
          Timer.recycle(timer.remove())
        }
      }
      timer.callback = () => {
        this.continue(resolve)
        Timer.recycle(timer)
      }
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
