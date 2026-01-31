---
sidebar_position: 1
title: encodeTeamData 编码队伍数据
---

## encodeTeamData

**类型**: `MethodDeclaration`

**定义位置**: [`codec.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts)

### 描述

编码队伍数据

参数 `data`: 队伍数据列表

返回值:队伍数据编码

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `data` | `Uint8Array` | - | - |

### 返回值

类型: `string`

队伍数据编码

### 源代码

**位置**: [第 249 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts#L249)

```typescript
public encodeTeamData(data: Uint8Array): string {
    const DATA = data
    const LENGTH = DATA.length
    const BYTES = GL.arrays[0].uint8
    let Bi = 0
    let Ri = 0
    while (Ri < LENGTH) {
      BYTES[Bi++] = 35 + (
        DATA[Ri    ]
      | DATA[Ri + 1] << 1
      | DATA[Ri + 2] << 2
      | DATA[Ri + 3] << 3
      | DATA[Ri + 4] << 4
      | DATA[Ri + 5] << 5
      )
      Ri += 6
    }
    return this.textDecoder.decode(
      new Uint8Array(BYTES.buffer, 0, Bi)
    )
  }
```

---



文档生成时间：2026/1/31 13:13:58
