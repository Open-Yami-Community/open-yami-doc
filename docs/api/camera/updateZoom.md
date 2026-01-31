---
sidebar_position: 1
title: updateZoom 更新缩放率
---

## updateZoom

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

更新缩放率

### 返回值

类型: `void`

### 源代码

**位置**: [第 239 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L239)

```typescript
public updateZoom(): void {
    this.zoom = this.rawZoom * Scene.scale
  }
```

---



文档生成时间：2026/1/31 13:13:58
