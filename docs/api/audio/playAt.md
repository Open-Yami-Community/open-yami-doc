---
sidebar_position: 1
title: playAt 播放音频文件(距离衰减)
---

## playAt

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

播放音频文件(距离衰减)

参数 `guid`: 音频文件ID

参数 `position`: 声音在场景中的位置

参数 `volume`: 播放音量[0-1]

参数 `playbackRate`: 播放速度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `guid` | `string` | - | - |
| `position` | `Point` | - | - |
| `volume` | `number` | - | n1 |
| `playbackRate` | `number` | - | n1 |

### 返回值

类型: `HTMLAudioPlayer2 \| undefined`

### 源代码

**位置**: [第 447 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L447)

```typescript
public playAt(guid: string, position: Point, volume: number = 1, playbackRate: number = 1): HTMLAudioPlayer2 | undefined {
    if (Math.dist(Camera.x, Camera.y, position.x, position.y) < AudioManager.attenDist) {
      const audio = this.play(guid, volume, playbackRate)
      if (audio) {
        audio.update = () => {
          const newVolume = volume * this.calcVolumeFactor(position, AudioManager.attenDist)
          if (Number.isFinite(newVolume)) {
            audio.volume = newVolume
          }
        }
        audio.update(0)
        return audio
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
