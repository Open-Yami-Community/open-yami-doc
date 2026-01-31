---
sidebar_position: 1
title: readInputNumber 读取输入框数值
---

## readInputNumber

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

读取输入框数值

参数 `offset`: 数值偏差

返回值:处理后的数值

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `offset` | `number` | - | n0 |

### 返回值

类型: `number`

处理后的数值

### 源代码

**位置**: [第 3108 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3108)

```typescript
private readInputNumber(offset: number = 0): number {
    const {input, min, max, decimals} = this
    const value = parseFloat(input.value) + offset || 0
    return Math.roundTo(Math.clamp(value, min, max), decimals)
  }
```

---



文档生成时间：2026/1/31 13:13:59
