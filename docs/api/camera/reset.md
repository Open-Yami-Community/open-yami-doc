---
sidebar_position: 1
title: reset 重置摄像机
---

## reset

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

重置摄像机

### 返回值

类型: `void`

### 源代码

**位置**: [第 102 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L102)

```typescript
public reset(): void {
    this.target = null
    this.x = 0
    this.y = 0
    this.rawZoom = 1
    this.updateZoom()
    this.updaters.delete('move')
    this.updaters.delete('zoom')
  }
```

---



文档生成时间：2026/1/31 13:13:58
