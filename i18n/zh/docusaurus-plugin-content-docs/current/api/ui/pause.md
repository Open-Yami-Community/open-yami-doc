---
sidebar_position: 1
title: pause 暂停播放视频
---

## pause

**类型**: `MethodDeclaration`

**所属类**: `VideoElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

暂停播放视频

### 返回值

类型: `void`

### 源代码

**位置**: [第 5478 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5478)

```typescript
public pause(): void {
    if (this.state === 'playing') {
      this.player.pause()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
