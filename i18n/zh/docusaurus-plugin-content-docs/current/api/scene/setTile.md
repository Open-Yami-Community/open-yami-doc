---
sidebar_position: 1
title: setTile 设置图块
---

## setTile

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

设置图块

参数 `x`: 瓦片地图X

参数 `y`: 瓦片地图Y

参数 `tilesetId`: 图块组ID

参数 `tx`: 图块X

参数 `ty`: 图块Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |
| `tilesetId` | `string` | - | - |
| `tx` | `number` | - | - |
| `ty` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3115 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3115)

```typescript
public setTile(x: number, y: number, tilesetId: string, tx: number, ty: number): void {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      const tileset = Data.tilesets[tilesetId]
      if (tileset && tx >= 0 && tx < tileset.width && ty >= 0 && ty < tileset.height) {
        const {tilesetMap, reverseMap} = this
        let tileId = reverseMap[tilesetId]
        if (tileId === undefined) outer: {
          for (let i = 1; i < 256; i++) {
            if (tilesetMap[i] === undefined) {
              tilesetMap[i] = tilesetId
              reverseMap[tilesetId] = i
              tileId = i
              break outer
            }
          }
          return
        }
        const ti = x + y * this.width
        const tile = tileId << 24 | ty << 16 | tx << 8
        this.tiles[ti] = tile
        this.createTileData(tile)
        this.scene.updateTerrain(x, y)
        this.updateSurroundingAutoTiles(x, y)
        // 如果图像数据未定义，则生成
        if (this.imageData[tile] === undefined) {
          // 避免多次调用重复生成图像数据
          this.imageData[tile] = null
          this.loadTexture(tile, () => {
            this.imageData[tile] = undefined
            this.createImageData(tile)
          })
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
