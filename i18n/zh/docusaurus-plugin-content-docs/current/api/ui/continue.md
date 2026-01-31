---
sidebar_position: 1
title: continue 继续播放视频
---

## continue

**类型**: `MethodDeclaration`

**所属类**: `VideoElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

继续播放视频

### 返回值

类型: `void`

### 源代码

**位置**: [第 5485 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5485)

```typescript
public continue(): void {
    if (this.state === 'paused') {
      this.player.play().catch(error => {})
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
