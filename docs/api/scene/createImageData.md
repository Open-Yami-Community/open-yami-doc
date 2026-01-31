---
sidebar_position: 1
title: createImageData 创建图像数据
---

## createImageData

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建图像数据

参数 `tile`: 图块ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `tile` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2979 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2979)

```typescript
private createImageData(tile: number): void {
    // 如果图像数据未创建
    if (this.imageData[tile] === undefined) {
      const tileData = this.tileData[tile & 0xffffff00]
      // 如果存在图块组数据
      if (tileData) {
        switch (tileData.type) {
          case 'normal': {
            // 如果存在纹理
            const tileset = tileData.tileset
            const texture = this.textures[tileset.image]
            if (!texture) break
            const scene = this.scene
            const tw = scene.tileWidth
            const th = scene.tileHeight
            const sw = tileset.tileWidth
            const sh = tileset.tileHeight
            const sx = sw * tileData.x
            const sy = sh * tileData.y
            const dl = (tw - sw) / 2 + tileset.globalOffsetX
            const dt = (th - sh)     + tileset.globalOffsetY
            const dr = dl + sw
            const db = dt + sh
            // 对图块纹理的采样坐标进行微调(避免一些渲染间隙)
            let sl = (sx + 0.002) / texture.width
            let sr = (sx + sw - 0.002) / texture.width
            if (tile & 0b1) {
              // 普通图块水平翻转
              const temporary = sl
              sl = sr
              sr = temporary
            }
            const st = (sy + 0.002) / texture.height
            const sb = (sy + sh - 0.002) / texture.height
            const array = new Float32Array(11)
            array[0] = texture.index
            array[1] = tileData.priority
            array[2] = 1
            array[3] = dl
            array[4] = dt
            array[5] = dr
            array[6] = db
            array[7] = sl
            array[8] = st
            array[9] = sr
            array[10] = sb
            this.imageData[tile] = array
            return
          }
          case 'auto': {
            const tileset = tileData.tileset
            const tx = tile >> 8 & 0xff
            const ty = tile >> 16 & 0xff
            const id = tx + ty * tileset.width
            const autoTile = tileset.tiles[id] as AutoTileData
            const texture = this.textures[autoTile.image]
            if (!texture) break
            // 如果存在自动图块模板和纹理
            const nodeId = tile & 0b111111
            const node = tileData.template.nodes[nodeId]
            if (!node) break
            // 如果存在图块节点
            const scene = this.scene
            const tw = scene.tileWidth
            const th = scene.tileHeight
            const frames = node.frames
            const length = frames.length
            const sw = tileset.tileWidth
            const sh = tileset.tileHeight
            const dl = (tw - sw) / 2 + tileset.globalOffsetX
            const dt = (th - sh)     + tileset.globalOffsetY
            const dr = dl + sw
            const db = dt + sh
            // 基础数据长度7，每一个动画帧加长度4
            const array = new Float32Array(length * 4 + 7)
            // 0：纹理索引，1：图块优先级，2：动画帧数量
            array[0] = texture.index
            array[1] = tileData.priority
            array[2] = length
            // 图块绘制的相对坐标
            array[3] = dl
            array[4] = dt
            array[5] = dr
            array[6] = db
            const ox = autoTile.x
            const oy = autoTile.y
            const width = texture.width
            const height = texture.height
            // 遍历设置动画帧数据
            for (let i = 0; i < length; i++) {
              const index = i * 4 + 7
              const frame = frames[i]
              const sx = (ox + (frame & 0xff)) * sw
              const sy = (oy + (frame >> 8)) * sh
              const sl = (sx + 0.002) / width
              const st = (sy + 0.002) / height
              const sr = (sx + sw - 0.002) / width
              const sb = (sy + sh - 0.002) / height
              // 设置4个纹理采样坐标
              array[index    ] = sl
              array[index + 1] = st
              array[index + 2] = sr
              array[index + 3] = sb
            }
            this.imageData[tile] = array
            return
          }
        }
      }
      // 没能创建图块数据，使用null占位，避免再次进行创建
      this.imageData[tile] = null
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
