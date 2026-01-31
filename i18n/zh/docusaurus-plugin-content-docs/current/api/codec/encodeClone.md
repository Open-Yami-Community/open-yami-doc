---
sidebar_position: 1
title: encodeClone 编码克隆数据
---

## encodeClone

**类型**: `MethodDeclaration`

**定义位置**: [`codec.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts)

### 描述

编码克隆数据

参数 `array`: 字节数组

参数 `index`: 当前位置

参数 `count`: 克隆数量

返回值:写入克隆数据后的结束位置

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `array` | `Uint8Array` | - | - |
| `index` | `number` | - | - |
| `count` | `number` | - | - |

### 返回值

类型: `number`

写入克隆数据后的结束位置

### 源代码

**位置**: [第 312 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/codec.ts#L312)

```typescript
private encodeClone(array: Uint8Array, index: number, count: number): number {
    const bits = Math.ceil(Math.log2(count + 1))
    const bytes = Math.ceil(bits / 5)
    for (let i = 0; i < bytes; i++) {
      const n = bytes - i - 1
      const head = n !== 0 ? 1 : 0
      const code = head << 5 | count >> n * 5 & 0b011111
      array[index++] = code + 35
    }
    return index
  }
```

---



文档生成时间：2026/1/31 13:13:58
