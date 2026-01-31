---
sidebar_position: 1
title: update 更新游戏数据
---

## update

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

更新游戏数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 120 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L120)

```typescript
public update(): void {
    Game.updaters.update(Time.deltaTime)
  }
```

---



文档生成时间：2026/1/31 13:13:59
