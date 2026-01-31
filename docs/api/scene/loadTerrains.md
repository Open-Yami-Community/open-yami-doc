---
sidebar_position: 1
title: loadTerrains 加载地形
---

## loadTerrains

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

加载地形

### 返回值

类型: `void`

### 源代码

**位置**: [第 1028 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1028)

```typescript
public loadTerrains(): void {
    const {width, height} = this
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.updateTerrain(x, y)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
