---
sidebar_position: 1
title: parseDateTimestamp 解析日期时间戳
---

## parseDateTimestamp

**类型**: `MethodDeclaration`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

解析日期时间戳

参数 `timestamp`: 时间戳

参数 `format`: 日期格式

返回值:格式化的日期

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `timestamp` | `number` | - | - |
| `format` | `string` | - | - |

### 返回值

类型: `string`

格式化的日期

### 源代码

**位置**: [第 121 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L121)

```typescript
public parseDateTimestamp(timestamp: number, format: string): string {
    const date = new Date(timestamp)
    return format.replace(/\{[YMDhms]\}/g, (match: string): string => {
      switch (match) {
        case '{Y}': return date.getFullYear().toString()
        case '{M}': return date.getMonth() + 1 + ''
        case '{D}': return date.getDate().toString()
        case '{h}': return date.getHours().toString().padStart(2, '0')
        case '{m}': return date.getMinutes().toString().padStart(2, '0')
        case '{s}': return date.getSeconds().toString().padStart(2, '0')
        default: return ''
      }
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
