---
sidebar_position: 1
title: connect 连接节点
---

## connect

**类型**: `MethodDeclaration`

**所属类**: `AudioReverb`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

连接节点

### 返回值

类型: `void`

### 源代码

**位置**: [第 640 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L640)

```typescript
private connect(): void {
    this.player.reverb = this
    this.input.disconnect(this.output)
    this.input.connect(this.dryGain)
    this.dryGain.connect(this.output)
    this.input.connect(this.wetGain)
    this.wetGain.connect(this.convolver)
  }
```

---



文档生成时间：2026/1/31 13:13:58
