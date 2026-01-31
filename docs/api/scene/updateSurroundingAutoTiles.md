---
sidebar_position: 1
title: updateSurroundingAutoTiles 更新自动图块帧
---

## updateSurroundingAutoTiles

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

更新自动图块帧

参数 `x`: 瓦片地图X

参数 `y`: 瓦片地图Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3172 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3172)

```typescript
private updateSurroundingAutoTiles(x: number, y: number): void {
    const width = this.width
    const height = this.height
    const left = Math.max(x - 1, 0)
    const top = Math.max(y - 1, 0)
    const right = Math.min(x + 2, width)
    const bottom = Math.min(y + 2, height)
    const tiles = this.tiles
    const tileData = this.tileData
    for (let y = top; y < bottom; y++) {
      for (let x = left; x < right; x++) {
        if (x >= 0 && x < width && y >= 0 && y < height) {
          const ti = x + y * width
          const tile = tiles[ti]
          const data = tileData[tile & 0xffffff00]
          if (data?.type !== 'auto') continue
          const template = data.template
          const key = tile >> 8
          const r = width - 1
          const b = height - 1
          const neighbor =
            (x > 0          && key !== tiles[ti - 1        ] >> 8) as unknown as number + 1
          | (x > 0 && y > 0 && key !== tiles[ti - 1 - width] >> 8) as unknown as number + 1 << 2
          | (         y > 0 && key !== tiles[ti     - width] >> 8) as unknown as number + 1 << 4
          | (x < r && y > 0 && key !== tiles[ti + 1 - width] >> 8) as unknown as number + 1 << 6
          | (x < r          && key !== tiles[ti + 1        ] >> 8) as unknown as number + 1 << 8
          | (x < r && y < b && key !== tiles[ti + 1 + width] >> 8) as unknown as number + 1 << 10
          | (         y < b && key !== tiles[ti     + width] >> 8) as unknown as number + 1 << 12
          | (x > 0 && y < b && key !== tiles[ti - 1 + width] >> 8) as unknown as number + 1 << 14
          const nodes = template.nodes
          const length = nodes.length
          let nodeIndex = 0
          for (let i = 0; i < length; i++) {
            const code = nodes[i].rule | neighbor
            if (Math.max(
              code       & 0b11,
              code >> 2  & 0b11,
              code >> 4  & 0b11,
              code >> 6  & 0b11,
              code >> 8  & 0b11,
              code >> 10 & 0b11,
              code >> 12 & 0b11,
              code >> 14 & 0b11,
            ) !== 0b11) {
              nodeIndex = i
              break
            }
          }
          const nTile = key << 8 | nodeIndex
          if (tiles[ti] !== nTile) {
            tiles[ti] = nTile
            this.createTileData(nTile)
            // 如果图像数据未定义，则生成
            if (this.imageData[nTile] === undefined) {
              // 避免多次调用重复生成图像数据
              this.imageData[nTile] = null
              this.loadTexture(nTile, () => {
                this.imageData[nTile] = undefined
                this.createImageData(nTile)
              })
            }
          }
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
