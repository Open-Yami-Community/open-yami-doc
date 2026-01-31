---
sidebar_position: 1
title: getAudio 获取音频元素
---

## getAudio

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

获取音频元素

### 返回值

类型: `HTMLAudioPlayer2`

### 源代码

**位置**: [第 378 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L378)

```typescript
private getAudio(): HTMLAudioPlayer2 {
    let audio = this.audioPool.pop()
    if (audio === undefined) {
      audio = new Audio() as HTMLAudioPlayer2
      const source = AudioManager.context.createMediaElementSource(audio)
      const onStop = () => {
        if (this.audios.remove(audio!)) {
          this.audioPool.push(audio!)
          audio!.update = Function.empty
          source.disconnect(this.gain)
        }
      }
      audio.onStop = onStop
      audio.autoplay = true
      audio.source = source
      audio.update = Function.empty
      audio.on('ended', onStop)
      audio.on('error', onStop)
    }
    this.audios.push(audio)
    audio.source.connect(this.gain)
    return audio
  }
```

---



文档生成时间：2026/1/31 13:13:58
