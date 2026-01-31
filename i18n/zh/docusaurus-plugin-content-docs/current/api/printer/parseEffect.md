---
sidebar_position: 1
title: parseEffect 解析文字效果的颜色
---

## parseEffect

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

解析文字效果的颜色

参数 `effect`: 文字效果数据对象

返回值:解析后的文字效果对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `effect` | `TextEffect` | - | - |

### 返回值

类型: `TextEffect`

解析后的文字效果对象

### 源代码

**位置**: [第 1236 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1236)

```typescript
public static parseEffect(effect: TextEffect): TextEffect {
    const copy = {...effect}
    if ('color' in copy) {
      copy.color = Color.parseCSSColor(copy.color)
    }
    return copy
  }
```

---



文档生成时间：2026/1/31 13:13:59
