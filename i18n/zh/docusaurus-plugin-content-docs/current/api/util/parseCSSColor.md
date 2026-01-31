---
sidebar_position: 1
title: parseCSSColor 解析十六进制字符串返回CSS颜色
---

## parseCSSColor

**类型**: `MethodDeclaration`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

解析十六进制字符串返回CSS颜色

参数 `hex`: 十六进制颜色

返回值:CSS颜色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `hex` | `string` | - | - |

### 返回值

类型: `string`

CSS颜色

### 源代码

**位置**: [第 402 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L402)

```typescript
public parseCSSColor(hex: string): string {
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    const a = parseInt(hex.slice(6, 8), 16)
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }
```

---



文档生成时间：2026/1/31 13:13:59
