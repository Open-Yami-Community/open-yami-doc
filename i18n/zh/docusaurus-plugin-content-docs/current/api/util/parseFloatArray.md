---
sidebar_position: 1
title: parseFloatArray 解析十六进制字符串返回64位浮点型数组颜色
---

## parseFloatArray

**类型**: `MethodDeclaration`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

解析十六进制字符串返回64位浮点型数组颜色

参数 `hex`: 十六进制颜色

返回值:[R:0-1, G:0-1, B:0-1, A:0-1]

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `hex` | `string` | - | - |

### 返回值

类型: `Float64Array`

[R:0-1, G:0-1, B:0-1, A:0-1]

### 源代码

**位置**: [第 442 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L442)

```typescript
public parseFloatArray(hex: string): Float64Array {
    const rgba = new Float64Array(4)
    rgba[0] = parseInt(hex.slice(0, 2), 16) / 255
    rgba[1] = parseInt(hex.slice(2, 4), 16) / 255
    rgba[2] = parseInt(hex.slice(4, 6), 16) / 255
    rgba[3] = parseInt(hex.slice(6, 8), 16) / 255
    return rgba
  }
```

---



文档生成时间：2026/1/31 13:13:59
