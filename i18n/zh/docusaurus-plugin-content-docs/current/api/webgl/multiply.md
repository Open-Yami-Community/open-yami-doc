---
sidebar_position: 1
title: multiply 乘以目标矩阵
---

## multiply

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

乘以目标矩阵

参数 `matrix`: 目标矩阵

返回值:当前矩阵

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `matrix` | `Matrix` | - | - |

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2641 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2641)

```typescript
public multiply(matrix: Matrix): this {
    const A = this[0]
    const B = this[1]
    const C = this[3]
    const D = this[4]
    const E = this[6]
    const F = this[7]
    const a = matrix[0]
    const b = matrix[1]
    const c = matrix[3]
    const d = matrix[4]
    const e = matrix[6]
    const f = matrix[7]
    this[0] = A * a + C * b
    this[1] = B * a + D * b
    this[3] = A * c + C * d
    this[4] = B * c + D * d
    this[6] = A * e + C * f + E
    this[7] = B * e + D * f + F
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
