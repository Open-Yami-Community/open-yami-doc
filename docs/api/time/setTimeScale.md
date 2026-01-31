---
sidebar_position: 1
title: setTimeScale 设置增量时间缩放比例
---

## setTimeScale

**类型**: `MethodDeclaration`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

设置增量时间缩放比例

参数 `timeScale`: 增量时间缩放比例

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `timeScale` | `number` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 97 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L97)

```typescript
public setTimeScale(timeScale: number, easingId: string = '', duration: number = 0): void {
    if (duration > 0) {
      // 过渡模式
      this.transition = {
        start: this.timeScale,
        end: timeScale,
        easing: Easing.get(easingId),
        elapsed: 0,
        duration: duration,
      }
    } else {
      // 立即模式
      this.timeScale = timeScale
      this.transition = null
      this.executeCallbacks()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
