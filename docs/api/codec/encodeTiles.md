---
sidebar_position: 1
title: encodeTiles 编码图块
---

## encodeTiles

**类型**: `MethodDeclaration`

**定义位置**: [`codec.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts)

### 描述

编码图块

参数 `tiles`: 图块数组

返回值:图块数据编码

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `tiles` | `Uint32Array` | - | - |

### 返回值

类型: `string`

图块数据编码

### 源代码

**位置**: [第 14 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts#L14)

```typescript
public encodeTiles(tiles: Uint32Array): string {
    const {encodeClone} = this
    const TILES = tiles
    const TILES_LENGTH = TILES.length
    const BYTES = GL.arrays[0].uint8
    let Bi = 0
    let Ti = 0
    while (Ti < TILES_LENGTH) {
      if (TILES[Ti] === 0) {
        let blankCount = 1
        Ti += 1
        while (TILES[Ti] === 0) {
          blankCount++
          Ti++
        }
        if (blankCount <= 16) {
          BYTES[Bi++] = blankCount + 109
        } else {
          BYTES[Bi++] = 126
          Bi = encodeClone(BYTES, Bi, blankCount)
        }
      } else if (TILES[Ti] === TILES[Ti - 1]) {
        let cloneCount = 1
        Ti += 1
        while (TILES[Ti] === TILES[Ti - 1]) {
          cloneCount++
          Ti++
        }
        if (cloneCount <= 10) {
          BYTES[Bi++] = cloneCount + 98
        } else {
          BYTES[Bi++] = 109
          Bi = encodeClone(BYTES, Bi, cloneCount)
        }
      } else {
        const TILE = TILES[Ti]
        BYTES[Bi    ] = (TILE >> 26           ) + 35
        BYTES[Bi + 1] = (TILE >> 20 & 0b111111) + 35
        BYTES[Bi + 2] = (TILE >> 14 & 0b111111) + 35
        BYTES[Bi + 3] = (TILE >> 8  & 0b111111) + 35
        BYTES[Bi + 4] = (TILE       & 0b111111) + 35
        Bi += 5
        Ti += 1
      }
    }
    return this.textDecoder.decode(
      new Uint8Array(BYTES.buffer, 0, Bi)
    )
  }
```

---



文档生成时间：2026/1/31 13:13:58
