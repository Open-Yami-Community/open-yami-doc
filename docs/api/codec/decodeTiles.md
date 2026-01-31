---
sidebar_position: 1
title: decodeTiles 解码图块
---

## decodeTiles

**类型**: `MethodDeclaration`

**定义位置**: [`codec.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts)

### 描述

解码图块

参数 `code`: 图块数据编码

参数 `width`: 瓦片地图宽度

参数 `height`: 瓦片地图高度

返回值:图块数组

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `code` | `string` | - | - |
| `width` | `number` | - | - |
| `height` | `number` | - | - |

### 返回值

类型: `Uint32Array`

图块数组

### 源代码

**位置**: [第 71 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts#L71)

```typescript
public decodeTiles(code: string, width: number, height: number): Uint32Array {
    const {decodeClone} = this
    const BYTES = this.textEncoder.encode(code)
    const BYTES_LENGTH = BYTES.length
    const TILES = new Uint32Array(width * height)
    const TILES_LENGTH = TILES.length
    let Bi = 0
    let Ti = 0
    while (Bi < BYTES_LENGTH) {
      const CODE = BYTES[Bi]
      if (CODE <= 98) {
        TILES[Ti] =
          (BYTES[Bi    ] - 35 << 26)
        + (BYTES[Bi + 1] - 35 << 20)
        + (BYTES[Bi + 2] - 35 << 14)
        + (BYTES[Bi + 3] - 35 << 8)
        + (BYTES[Bi + 4] - 35)
        Ti += 1
        Bi += 5
      } else if (CODE <= 109) {
        if (CODE !== 109) {
          const COPY = TILES[Ti - 1]
          const END = Ti + CODE - 98
          while (Ti < END) {
            TILES[Ti++] = COPY
          }
          Bi += 1
        } else {
          const {index, count} = decodeClone(BYTES, ++Bi)
          const COPY = TILES[Ti - 1]
          const END = Ti + count
          while (Ti < END) {
            TILES[Ti++] = COPY
          }
          Bi = index
        }
      } else {
        if (CODE !== 126) {
          Ti += CODE - 109
          Bi += 1
        } else {
          const {index, count} = decodeClone(BYTES, ++Bi)
          Ti += count
          Bi = index
        }
      }
    }
    if (Bi !== BYTES_LENGTH || Ti !== TILES_LENGTH) {
      throw new RangeError(`
      Failed to decode tiles.
      Processed bytes: ${Bi} / ${BYTES_LENGTH}
      Restored data: ${Ti} / ${TILES_LENGTH}
      `)
    }
    return TILES
  }
```

---



文档生成时间：2026/1/31 13:13:58
