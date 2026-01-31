---
sidebar_position: 1
title: parseFloatArrayTag 解析颜色标签字符串返回64位浮点型数组颜色
---

## parseFloatArrayTag

**类型**: `MethodDeclaration`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

解析颜色标签字符串返回64位浮点型数组颜色

参数 `tag`: 颜色标签

返回值:[R:0-1, G:0-1, B:0-1, A:0-1]

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `tag` | `string` | - | - |

### 返回值

类型: `Float64Array`

[R:0-1, G:0-1, B:0-1, A:0-1]

### 源代码

**位置**: [第 456 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L456)

```typescript
public parseFloatArrayTag(tag: string): Float64Array {
    const string = tag.trim()
    let match
    if (match = string.match(Printer.regexps.color)) {
      const hex = match[1] + match[2] + match[3] + (match[4] ?? 'ff')
      return Color.parseFloatArray(hex)
    }
    if (match = string.match(Printer.regexps.colorIndex)) {
      const index = parseInt(match[1])
      const hex = Data.config.indexedColors[index].code
      return Color.parseFloatArray(hex)
    }
    throw new Error('Invalid color tag.')
  }
```

---



文档生成时间：2026/1/31 13:13:59
