---
sidebar_position: 1
title: play 播放音频文件
---

## play

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

播放音频文件

参数 `guid`: 音频文件ID

参数 `volume`: 播放音量[0-1]

参数 `playbackRate`: 播放速度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `guid` | `string` | - | - |
| `volume` | `number` | - | n1 |
| `playbackRate` | `number` | - | n1 |

### 返回值

类型: `HTMLAudioPlayer2 \| undefined`

### 源代码

**位置**: [第 422 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L422)

```typescript
public play(guid: string, volume: number = 1, playbackRate: number = 1): HTMLAudioPlayer2 | undefined {
    if (guid) {
      const audio = this.getRecentlyAudio(guid)
      if (audio) {
        audio.volume = Math.max(audio.volume, volume)
        return audio
      } else {
        const audio = this.getAudio()
        audio.guid = guid
        audio.timestamp = Time.timestamp
        audio.src = Loader.getBlobOrRawUrl(guid)
        audio.volume = volume
        audio.playbackRate = playbackRate
        return audio
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
