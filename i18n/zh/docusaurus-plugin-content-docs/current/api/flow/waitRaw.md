---
sidebar_position: 1
title: waitRaw 等待(异步)(不受游戏速度影响)
---

## waitRaw

**类型**: `MethodDeclaration`

**所属类**: `Flow`

**定义位置**: [`flow.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts)

### 描述

等待(异步)(不受游戏速度影响)

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `duration` | `number` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 174 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts#L174)

```typescript
public waitRaw(duration: number): Promise<void> {
    return new Promise((resolve: () => void) => {
      const timer = Timer.fetch().add()
      timer.mode = 'raw'
      timer.duration = duration
      timer.callback = () => {
        this.continue(resolve)
        Timer.recycle(timer)
      }
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
