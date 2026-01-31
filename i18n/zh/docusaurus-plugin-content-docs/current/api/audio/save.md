---
sidebar_position: 1
title: save 保存当前的播放状态
---

## save

**类型**: `MethodDeclaration`

**所属类**: `SingleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

保存当前的播放状态

### 返回值

类型: `void`

### 源代码

**位置**: [第 207 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L207)

```typescript
public save(): void {
    const audio = this.audio
    this.cache = {
      guid: audio.guid,
      offset: audio.currentTime,
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
