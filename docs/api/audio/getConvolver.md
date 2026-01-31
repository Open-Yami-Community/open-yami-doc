---
sidebar_position: 1
title: getConvolver 获取卷积器
---

## getConvolver

**类型**: `MethodDeclaration`

**所属类**: `AudioReverb`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

获取卷积器

返回值:卷积器节点

### 返回值

类型: `ConvolverNode`

卷积器节点

### 源代码

**位置**: [第 732 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L732)

```typescript
public static getConvolver(): ConvolverNode {
    if (!AudioReverb.convolver) {
      const PREDELAY = 0.1
      const DECAYTIME = 2
      const context = AudioManager.context
      const duration = PREDELAY + DECAYTIME
      const sampleRate = context.sampleRate
      const sampleCount = Math.round(sampleRate * duration)
      const convolver = context.createConvolver()
      const filter = context.createBiquadFilter()
      const buffer = context.createBuffer(2, sampleCount, sampleRate)
      const bufferLength = buffer.length
      const delayLength = Math.round(bufferLength * PREDELAY / duration)
      const decayLength = Math.round(bufferLength * DECAYTIME / duration)
      const random = Math.random
      for (let i = 0; i < buffer.numberOfChannels; i++) {
        const samples = buffer.getChannelData(i)
        for (let i = 0; i < delayLength; i++) {
          samples[i] = (random() * 2 - 1) * i / delayLength
        }
        for (let i = delayLength; i < bufferLength; i++) {
          const time = (bufferLength - i) / decayLength
          samples[i] = (random() * 2 - 1) * time
        }
      }
      convolver.buffer = buffer
      filter.type = 'lowpass'
      filter.frequency.value = 3000
      convolver.connect(filter)
      filter.connect(context.destination)
      AudioReverb.convolver = convolver
    }
    return AudioReverb.convolver
  }
```

---



文档生成时间：2026/1/31 13:13:58
