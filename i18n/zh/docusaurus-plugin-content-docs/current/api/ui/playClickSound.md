---
sidebar_position: 1
title: playClickSound 播放鼠标点击音效
---

## playClickSound

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

播放鼠标点击音效

### 返回值

类型: `void`

### 源代码

**位置**: [第 4928 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4928)

```typescript
private playClickSound(): void {
    AudioManager.se.play(this.clickSound)
  }
```

---



文档生成时间：2026/1/31 13:13:59
