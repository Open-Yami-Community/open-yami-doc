---
sidebar_position: 1
title: stop 停止播放
---

## stop

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

停止播放

### 返回值

类型: `void`

### 源代码

**位置**: [第 477 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L477)

```typescript
public stop(): void {
    const {audios} = this
    let i = audios.length
    while (--i >= 0) {
      audios[i].src = ''
      audios[i].onStop()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
