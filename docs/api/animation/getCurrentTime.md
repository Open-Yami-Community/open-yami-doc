---
sidebar_position: 1
title: getCurrentTime 获取动画当前播放时间
---

## getCurrentTime

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

获取动画当前播放时间

返回值:毫秒

### 返回值

类型: `number`

毫秒

### 源代码

**位置**: [第 261 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L261)

```typescript
public getCurrentTime(): number {
    return this.index * AnimationPlayer.step
  }
```

---



文档生成时间：2026/1/31 13:13:58
