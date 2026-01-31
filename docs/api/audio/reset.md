---
sidebar_position: 1
title: reset 重置音频播放器
---

## reset

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

重置音频播放器

### 返回值

类型: `void`

### 源代码

**位置**: [第 589 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L589)

```typescript
public reset(): void {
    this.stop()
    this.setVolume(1)
    this.setPan(0)
    this.setReverb(1, 0, '', 0)
  }
```

---



文档生成时间：2026/1/31 13:13:58
