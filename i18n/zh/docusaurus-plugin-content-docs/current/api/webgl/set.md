---
sidebar_position: 1
title: set 设置为目标矩阵的参数
---

## set

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

设置为目标矩阵的参数

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

**位置**: [第 2606 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2606)

```typescript
public set(matrix: Matrix): this {
    this[0] = matrix[0]
    this[1] = matrix[1]
    this[3] = matrix[3]
    this[4] = matrix[4]
    this[6] = matrix[6]
    this[7] = matrix[7]
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
