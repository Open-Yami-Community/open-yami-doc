---
sidebar_position: 1
title: translate 平移
---

## translate

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

平移

参数 `x`: 水平偏移距离

参数 `y`: 垂直偏移距离

返回值:当前矩阵

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2747 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2747)

```typescript
public translate(x: number, y: number): this {
    this[6] += this[0] * x + this[3] * y
    this[7] += this[1] * x + this[4] * y
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
