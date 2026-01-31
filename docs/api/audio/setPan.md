---
sidebar_position: 1
title: setPan 设置声像(左右声道音量)
---

## setPan

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

设置声像(左右声道音量)

参数 `pan`: 声像[-1~+1]

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `pan` | `number` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 546 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L546)

```typescript
public setPan(pan: number, easingId: string = '', duration: number = 0): void {
    if (this.panTransition !== null) {
      this.panTransition.remove()
      this.panTransition = null
    }
    const panner = this.panner.pan
    if (duration > 0) {
      const start = panner.value
      const end = pan
      const easing = Easing.get(easingId)
      this.panTransition = new Timer({
        duration: duration,
        update: timer => {
          const time = easing.get(timer.elapsed / timer.duration)
          panner.value = Math.clamp(start * (1 - time) + end * time, -1, 1)
        },
        callback: () => {
          this.panTransition = null
        },
      }).add()
    } else {
      panner.value = Math.clamp(pan, -1, 1)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
