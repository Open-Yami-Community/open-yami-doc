---
sidebar_position: 1
title: getRecentlyAudio 获取不久前的音频元素
---

## getRecentlyAudio

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

获取不久前的音频元素

参数 `guid`: 音频文件ID

返回值:音频元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `guid` | `string` | - | - |

### 返回值

类型: `HTMLAudioPlayer2 \| undefined`

音频元素

### 源代码

**位置**: [第 407 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L407)

```typescript
private getRecentlyAudio(guid: string): HTMLAudioPlayer2 | undefined {
    for (const audio of this.audios) {
      if (audio.guid === guid && audio.currentTime < 0.05) {
        return audio
      }
    }
    return undefined
  }
```

---



文档生成时间：2026/1/31 13:13:58
