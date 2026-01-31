---
sidebar_position: 1
title: setDry 设置干声
---

## setDry

**类型**: `MethodDeclaration`

**所属类**: `AudioReverb`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

设置干声

参数 `dry`: 干声增益[0-1]

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `dry` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 710 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L710)

```typescript
private setDry(dry: number): void {
    if (this.dry !== dry) {
      this.dry = dry
      this.dryGain.gain.value = dry
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
