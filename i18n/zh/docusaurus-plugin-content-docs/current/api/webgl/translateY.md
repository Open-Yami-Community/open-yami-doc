---
sidebar_position: 1
title: translateY 垂直平移
---

## translateY

**类型**: `MethodDeclaration`

**所属类**: `Matrix`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

垂直平移

参数 `y`: 水平偏移距离

返回值:当前矩阵

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `y` | `number` | - | - |

### 返回值

类型: `this`

当前矩阵

### 源代码

**位置**: [第 2758 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2758)

```typescript
public translateY(y: number): this {
    this[6] += this[3] * y
    this[7] += this[4] * y
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
