---
sidebar_position: 1
title: setWet 设置湿声
---

## setWet

**类型**: `MethodDeclaration`

**所属类**: `AudioReverb`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

设置湿声

参数 `wet`: 湿声增益[0-1]

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `wet` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 721 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L721)

```typescript
private setWet(wet: number): void {
    if (this.wet !== wet) {
      this.wet = wet
      this.wetGain.gain.value = wet * 2
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
