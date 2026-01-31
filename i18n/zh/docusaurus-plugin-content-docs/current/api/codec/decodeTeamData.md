---
sidebar_position: 1
title: decodeTeamData 解码队伍数据
---

## decodeTeamData

**类型**: `MethodDeclaration`

**定义位置**: [`codec.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts)

### 描述

解码队伍数据

参数 `code`: 队伍数据编码

参数 `length`: 队伍数量

返回值:队伍数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `code` | `string` | - | - |
| `length` | `number` | - | - |

### 返回值

类型: `Uint8Array`

队伍数据

### 源代码

**位置**: [第 277 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts#L277)

```typescript
public decodeTeamData(code: string, length: number): Uint8Array {
    const BYTES = this.textEncoder.encode(code)
    const BYTES_LENGTH = BYTES.length
    const DATA_LENGTH = (length + 1) / 2 * length
    const DATA = new Uint8Array(DATA_LENGTH)
    let Bi = 0
    let Ri = 0
    while (Bi < BYTES_LENGTH) {
      const CODE = BYTES[Bi] - 35
      DATA[Ri    ] = CODE      & 0b000001
      DATA[Ri + 1] = CODE >> 1 & 0b00001
      DATA[Ri + 2] = CODE >> 2 & 0b0001
      DATA[Ri + 3] = CODE >> 3 & 0b001
      DATA[Ri + 4] = CODE >> 4 & 0b01
      DATA[Ri + 5] = CODE >> 5
      Ri += 6
      Bi += 1
    }
    if (Bi !== BYTES_LENGTH || Ri < DATA_LENGTH) {
      throw new RangeError(`
      Failed to decode data.
      Processed bytes: ${Bi} / ${BYTES_LENGTH}
      Restored data: ${Ri} / ${DATA_LENGTH}
      `)
    }
    return DATA
  }
```

---



文档生成时间：2026/1/31 13:13:58
