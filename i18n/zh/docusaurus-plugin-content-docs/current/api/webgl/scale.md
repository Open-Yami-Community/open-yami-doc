---
sidebar_position: 1
title: scale 缩放
---

## scale

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

缩放

参数 `h`: 水平缩放系数

参数 `v`: 垂直缩放系数

返回值:当前矩阵

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `h` | `number` | - | - |
| `v` | `number` | - | - |

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2711 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2711)

```typescript
public scale(h: number, v: number): this {
    this[0] *= h
    this[1] *= h
    this[3] *= v
    this[4] *= v
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
