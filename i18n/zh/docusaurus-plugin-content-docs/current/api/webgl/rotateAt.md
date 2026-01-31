---
sidebar_position: 1
title: rotateAt 在指定点旋转
---

## rotateAt

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

在指定点旋转

参数 `x`: 旋转位置X

参数 `y`: 旋转位置Y

参数 `angle`: 旋转角度(弧度)

返回值:当前矩阵

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |
| `angle` | `number` | - | - |

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2689 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2689)

```typescript
public rotateAt(x: number, y: number, angle: number): this {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    const a = this[0]
    const b = this[1]
    const c = this[3]
    const d = this[4]
    this[0] = a * cos + c * sin
    this[1] = b * cos + d * sin
    this[3] = c * cos - a * sin
    this[4] = d * cos - b * sin
    this[6] += (a - this[0]) * x + (c - this[3]) * y
    this[7] += (b - this[1]) * x + (d - this[4]) * y
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
