---
sidebar_position: 1
title: initialize 初始化
---

## initialize

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

初始化

### 返回值

类型: `void`

### 源代码

**位置**: [第 499 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L499)

```typescript
public static initialize(): void {
    this.collideWithActorShape = Data.config.collision.trigger.collideWithActorShape
  }
```

---



文档生成时间：2026/1/31 13:13:59
