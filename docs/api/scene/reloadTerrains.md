---
sidebar_position: 1
title: reloadTerrains 重新加载地形障碍
---

## reloadTerrains

**类型**: `MethodDeclaration`

**所属类**: `SceneParallaxManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

重新加载地形障碍

### 返回值

类型: `void`

### 源代码

**位置**: [第 2137 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2137)

```typescript
private reloadTerrains(): void {
    if (!this.reloadingTerrains) {
      this.reloadingTerrains = true
      Callback.push(() => {
        delete this.reloadingTerrains
        this.scene.loadTerrains()
      })
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
