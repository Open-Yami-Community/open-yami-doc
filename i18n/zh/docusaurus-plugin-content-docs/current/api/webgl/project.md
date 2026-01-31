---
sidebar_position: 1
title: project 投影
---

## project

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

投影

参数 `flip`: 是否垂直翻转(-1或1)

参数 `width`: 屏幕宽度

参数 `height`: 屏幕高度

返回值:当前矩阵

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `flip` | `number` | - | - |
| `width` | `number` | - | - |
| `height` | `number` | - | - |

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2813 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2813)

```typescript
public project(flip: number, width: number, height: number): this {
    this[0] = 2 / width
    this[1] = 0
    this[3] = 0
    this[4] = 2 * flip / height
    this[6] = -1
    this[7] = -flip
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
