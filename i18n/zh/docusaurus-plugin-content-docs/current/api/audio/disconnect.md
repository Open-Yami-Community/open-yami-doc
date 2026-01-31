---
sidebar_position: 1
title: disconnect 断开节点
---

## disconnect

**类型**: `MethodDeclaration`

**所属类**: `AudioReverb`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

断开节点

### 返回值

类型: `void`

### 源代码

**位置**: [第 650 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L650)

```typescript
private disconnect(): void {
    this.player.reverb = null
    this.input.disconnect(this.dryGain)
    this.dryGain.disconnect(this.output)
    this.input.disconnect(this.wetGain)
    this.wetGain.disconnect(this.convolver)
    this.input.connect(this.output)
  }
```

---



文档生成时间：2026/1/31 13:13:58
