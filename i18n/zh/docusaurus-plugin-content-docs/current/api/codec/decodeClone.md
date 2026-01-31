---
sidebar_position: 1
title: decodeClone 解码克隆数据
---

## decodeClone

**类型**: `MethodDeclaration`

**定义位置**: [`codec.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts)

### 描述

解码克隆数据

参数 `array`: 字节码列表

参数 `index`: 字节码索引

返回值:结束位置和克隆数量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `array` | `Uint8Array` | - | - |
| `index` | `number` | - | - |

### 返回值

类型: `\{index\: number, count\: number\}`

结束位置和克隆数量

### 源代码

**位置**: [第 330 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts#L330)

```typescript
private decodeClone(array: Uint8Array, index: number): {index: number, count: number} {
    let count = 0
    let code
    do {
      code = array[index++] - 35
      count = count << 5 | code & 0b011111
    }
    while (code & 0b100000)
    return {index, count}
  }
```

---



文档生成时间：2026/1/31 13:13:58
