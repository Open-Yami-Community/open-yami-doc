---
sidebar_position: 1
title: createAllTileData 创建所有图块数据
---

## createAllTileData

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建所有图块数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 2902 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2902)

```typescript
private createAllTileData(): void {
    const tiles = this.tiles
    const length = tiles.length
    for (let i = 0; i < length; i++) {
      this.createTileData(tiles[i])
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
