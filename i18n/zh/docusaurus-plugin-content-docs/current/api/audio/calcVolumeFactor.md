---
sidebar_position: 1
title: calcVolumeFactor 计算衰减后的音量系数
---

## calcVolumeFactor

**类型**: `MethodDeclaration`

**所属类**: `MultipleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

计算衰减后的音量系数

参数 `position`: 音效位置

参数 `range`: 音量衰减范围

返回值:音量系数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `position` | `Point` | - | - |
| `range` | `number` | - | - |

### 返回值

类型: `number`

音量系数

### 源代码

**位置**: [第 469 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L469)

```typescript
public calcVolumeFactor(position: Point, range: number): number {
    const dist = Math.dist(Camera.x, Camera.y, position.x, position.y)
    const easing = Easing.get(AudioManager.attenEasingId)
    const attenuation = easing.get(dist / range)
    return 1 - attenuation
  }
```

---



文档生成时间：2026/1/31 13:13:58
