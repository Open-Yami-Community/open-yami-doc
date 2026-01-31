---
sidebar_position: 1
title: set6f 设置矩阵参数
---

## set6f

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

设置矩阵参数

参数 `a`: 矩阵参数[0]

参数 `b`: 矩阵参数[1]

参数 `c`: 矩阵参数[3]

参数 `d`: 矩阵参数[4]

参数 `e`: 矩阵参数[6]

参数 `f`: 矩阵参数[7]

返回值:当前矩阵

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `a` | `number` | - | - |
| `b` | `number` | - | - |
| `c` | `number` | - | - |
| `d` | `number` | - | - |
| `e` | `number` | - | - |
| `f` | `number` | - | - |

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2626 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2626)

```typescript
public set6f(a: number, b: number, c: number, d: number, e: number, f: number): this {
    this[0] = a
    this[1] = b
    this[3] = c
    this[4] = d
    this[6] = e
    this[7] = f
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
