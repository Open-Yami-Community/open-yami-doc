---
sidebar_position: 1
title: scaleAt 在指定点缩放
---

## scaleAt

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

在指定点缩放

参数 `x`: 缩放位置X

参数 `y`: 缩放位置Y

参数 `h`: 水平缩放系数

参数 `v`: 垂直缩放系数

返回值:当前矩阵

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |
| `h` | `number` | - | - |
| `v` | `number` | - | - |

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2727 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2727)

```typescript
public scaleAt(x: number, y: number, h: number, v: number): this {
    const a = this[0]
    const b = this[1]
    const c = this[3]
    const d = this[4]
    this[0] *= h
    this[1] *= h
    this[3] *= v
    this[4] *= v
    this[6] += (a - this[0]) * x + (c - this[3]) * y
    this[7] += (b - this[1]) * x + (d - this[4]) * y
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
