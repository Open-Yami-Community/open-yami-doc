---
sidebar_position: 1
title: continue 继续播放
---

## continue

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

继续播放

### 返回值

类型: `void`

### 源代码

**位置**: [第 497 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L497)

```typescript
public continue(): void {
    for (const audio of this.audios) {
      if (audio.ended === false &&
        audio.paused === true) {
        audio.play()
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
