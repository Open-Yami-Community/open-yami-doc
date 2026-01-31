---
sidebar_position: 1
title: initialize 初始化摄像机
---

## initialize

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

初始化摄像机

### 返回值

类型: `void`

### 源代码

**位置**: [第 94 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L94)

```typescript
public initialize(): void {
    this.padding = Data.config.scene.padding
    this.tileArea = Data.config.tileArea
    this.animationArea = Data.config.animationArea
    this.lightArea = Data.config.lightArea
  }
```

---



文档生成时间：2026/1/31 13:13:58
