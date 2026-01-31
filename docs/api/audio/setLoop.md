---
sidebar_position: 1
title: setLoop 设置循环
---

## setLoop

**类型**: `MethodDeclaration`

**所属类**: `SingleAudioPlayer`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

设置循环

参数 `loop`: 循环播放

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `loop` | `boolean` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 318 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L318)

```typescript
public setLoop(loop: boolean): void {
    this.audio.loop = loop
  }
```

---



文档生成时间：2026/1/31 13:13:58
