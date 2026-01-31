---
sidebar_position: 1
title: render 渲染游戏画面
---

## render

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

渲染游戏画面

### 返回值

类型: `void`

### 源代码

**位置**: [第 125 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L125)

```typescript
public render(): void {
    Game.defer.then(Game.deferredRendering)
  }
```

---



文档生成时间：2026/1/31 13:13:59
