---
sidebar_position: 1
title: setVolume 设置音量
---

## setVolume

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

设置音量

参数 `volume`: 播放音量[0-1]

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `volume` | `number` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 512 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L512)

```typescript
public setVolume(volume: number, easingId: string = '', duration: number = 0): void {
    // 如果上一次的音量过渡未结束，移除
    if (this.volumeTransition !== null) {
      this.volumeTransition.remove()
      this.volumeTransition = null
    }
    const {gain} = this.gain
    if (duration > 0) {
      const start = gain.value
      const end = volume
      const easing = Easing.get(easingId)
      // 创建音量过渡计时器
      this.volumeTransition = new Timer({
        duration: duration,
        update: timer => {
          const time = easing.get(timer.elapsed / timer.duration)
          gain.value = Math.clamp(start * (1 - time) + end * time, 0, 1)
        },
        callback: () => {
          this.volumeTransition = null
        },
      }).add()
    } else {
      // 直接设置音量
      gain.value = Math.clamp(volume, 0, 1)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
