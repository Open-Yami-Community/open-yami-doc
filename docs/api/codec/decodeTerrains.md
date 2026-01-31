---
sidebar_position: 1
title: decodeTerrains 解码地形
---

## decodeTerrains

**类型**: `MethodDeclaration`

**定义位置**: [`codec.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts)

### 描述

解码地形

参数 `scene`: 场景上下文对象

参数 `code`: 地形数据编码

参数 `width`: 场景宽度

参数 `height`: 场景高度

返回值:场景地形数据列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `terrains` | `Uint8Array` | - | - |
| `code` | `string` | - | - |

### 返回值

类型: `Uint8Array`

场景地形数据列表

### 源代码

**位置**: [第 192 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts#L192)

```typescript
public decodeTerrains(terrains: Uint8Array, code: string): Uint8Array {
    const {decodeClone} = this
    const BYTES = this.textEncoder.encode(code)
    const BYTES_LENGTH = BYTES.length
    const TERRAINS = terrains
    const TERRAINS_LENGTH = TERRAINS.length
    let Bi = 0
    let Ti = 0
    while (Bi < BYTES_LENGTH) {
      const CODE = BYTES[Bi]
      if (CODE <= 50) {
        TERRAINS[Ti] = CODE - 35
        Ti += 1
        Bi += 1
      } else if (CODE <= 76) {
        if (CODE !== 76) {
          const COPY = TERRAINS[Ti - 1]
          const END = Ti + CODE - 50
          while (Ti < END) {
            TERRAINS[Ti++] = COPY
          }
          Bi += 1
        } else {
          const {index, count} = decodeClone(BYTES, ++Bi)
          const COPY = TERRAINS[Ti - 1]
          const END = Ti + count
          while (Ti < END) {
            TERRAINS[Ti++] = COPY
          }
          Bi = index
        }
      } else {
        if (CODE !== 126) {
          Ti += CODE - 76
          Bi += 1
        } else {
          const {index, count} = decodeClone(BYTES, ++Bi)
          Ti += count
          Bi = index
        }
      }
    }
    if (Bi !== BYTES_LENGTH || Ti !== TERRAINS_LENGTH) {
      throw new RangeError(`
      Failed to decode terrains.
      Processed bytes: ${Bi} / ${BYTES_LENGTH}
      Restored data: ${Ti} / ${TERRAINS_LENGTH}
      `)
    }
    return TERRAINS
  }
```

---



文档生成时间：2026/1/31 13:13:58
