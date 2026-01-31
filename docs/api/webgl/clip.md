---
sidebar_position: 1
title: clip 裁剪纹理
---

## clip

**类型**: `MethodDeclaration`

**所属类**: `Texture`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

裁剪纹理

参数 `x`: 水平位置

参数 `y`: 垂直位置

参数 `width`: 裁剪宽度

参数 `height`: 裁剪高度

返回值:当前纹理

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |
| `width` | `number` | - | - |
| `height` | `number` | - | - |

### 返回值

类型: `this`

当前纹理

### 源代码

**位置**: [第 1990 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L1990)

```typescript
public clip(x: number, y: number, width: number, height: number): this {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
