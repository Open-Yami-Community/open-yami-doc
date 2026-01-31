---
sidebar_position: 1
title: createTileData 创建图块数据
---

## createTileData

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建图块数据

参数 `tile`: 图块ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `tile` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2923 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2923)

```typescript
private createTileData(tile: number): void {
    // 如果当前图块数据未创建
    const dataId = tile & 0xffffff00
    if (this.tileData[dataId] === undefined) {
      const guid = this.tilesetMap[tile >> 24]!
      const tileset = Data.tilesets[guid]
      // 如果存在图块组数据
      if (tileset !== undefined) {
        switch (tileset.type) {
          case 'normal': {
            const tx = tile >> 8 & 0xff
            const ty = tile >> 16 & 0xff
            const id = tx + ty * tileset.width
            this.tileData[dataId] = {
              x: tx,
              y: ty,
              type: 'normal',
              tileset: tileset,
              terrain: tileset.terrains[id],
              tag: tileset.tags[id],
              priority: tileset.priorities[id] + tileset.globalPriority,
            }
            return
          }
          case 'auto': {
            const tx = tile >> 8 & 0xff
            const ty = tile >> 16 & 0xff
            const id = tx + ty * tileset.width
            const autoTile = tileset.tiles[id]
            if (!autoTile) break
            const template = Data.autotiles[autoTile.template]
            if (!template) break
            this.tileData[dataId] = {
              x: tx,
              y: ty,
              type: 'auto',
              tileset: tileset,
              terrain: tileset.terrains[id],
              tag: tileset.tags[id],
              priority: tileset.priorities[id] + tileset.globalPriority,
              autoTile: autoTile,
              template: template,
            }
            return
          }
        }
      }
      // 没能创建图块数据，使用null占位，避免再次进行创建
      this.tileData[dataId] = null
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
