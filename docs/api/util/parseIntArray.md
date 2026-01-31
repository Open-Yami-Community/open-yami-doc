---
sidebar_position: 1
title: parseIntArray 解析十六进制字符串返回整型数组颜色
---

## parseIntArray

**类型**: `MethodDeclaration`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

解析十六进制字符串返回整型数组颜色

参数 `hex`: 十六进制颜色

返回值:[R:0-255, G:0-255, B:0-255, A:0-255]

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `hex` | `string` | - | - |

### 返回值

类型: `Uint8Array`

[R:0-255, G:0-255, B:0-255, A:0-255]

### 源代码

**位置**: [第 428 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L428)

```typescript
public parseIntArray(hex: string): Uint8Array {
    const rgba = new Uint8Array(4)
    rgba[0] = parseInt(hex.slice(0, 2), 16)
    rgba[1] = parseInt(hex.slice(2, 4), 16)
    rgba[2] = parseInt(hex.slice(4, 6), 16)
    rgba[3] = parseInt(hex.slice(6, 8), 16)
    return rgba
  }
```

---



文档生成时间：2026/1/31 13:13:59
