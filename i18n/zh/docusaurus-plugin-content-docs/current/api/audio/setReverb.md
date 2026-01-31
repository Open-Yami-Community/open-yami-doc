---
sidebar_position: 1
title: setReverb 设置混响
---

## setReverb

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

设置混响

参数 `dry`: 干声增益[0-1]

参数 `wet`: 湿声增益[0-1]

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `dry` | `number` | - | - |
| `wet` | `number` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 578 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L578)

```typescript
public setReverb(dry: number, wet: number, easingId: string = '', duration: number = 0): void {
    if (this.reverb === null && !(
      dry === 1 && wet === 0)) {
      new AudioReverb(this)
    }
    if (this.reverb !== null) {
      this.reverb.set(dry, wet, easingId, duration)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
