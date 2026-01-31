---
sidebar_position: 1
title: playHoverSound 播放鼠标悬停音效
---

## playHoverSound

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

播放鼠标悬停音效

### 返回值

类型: `void`

### 源代码

**位置**: [第 4923 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4923)

```typescript
private playHoverSound(): void {
    AudioManager.se.play(this.hoverSound)
  }
```

---



文档生成时间：2026/1/31 13:13:59
