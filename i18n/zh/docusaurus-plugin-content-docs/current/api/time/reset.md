---
sidebar_position: 1
title: reset 重置游戏时间管理器
---

## reset

**类型**: `MethodDeclaration`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

重置游戏时间管理器

### 返回值

类型: `void`

### 源代码

**位置**: [第 37 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L37)

```typescript
public reset(): void {
    this.timeScale = 1
    this.playTime = 0
    this.callbacks = null
    this.transition = null
  }
```

---



文档生成时间：2026/1/31 13:13:59
