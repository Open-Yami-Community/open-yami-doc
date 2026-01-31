---
sidebar_position: 1
title: pause 暂停播放
---

## pause

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

暂停播放

### 返回值

类型: `void`

### 源代码

**位置**: [第 487 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L487)

```typescript
public pause(): void {
    for (const audio of this.audios) {
      if (audio.ended === false &&
        audio.paused === false) {
        audio.pause()
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
