---
sidebar_position: 1
title: rotate 旋转
---

## rotate

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

旋转

参数 `angle`: 旋转角度(弧度)

返回值:当前矩阵

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `angle` | `number` | - | - |

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2668 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2668)

```typescript
public rotate(angle: number): this {
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
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
