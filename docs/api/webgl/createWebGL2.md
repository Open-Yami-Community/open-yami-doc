---
sidebar_position: 1
title: createWebGL2 创建WebGL2上下文
---

## createWebGL2

**类型**: `MethodDeclaration`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

创建WebGL2上下文

参数 `canvas`: 画布元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `canvas` | `HTMLCanvasElement` | - | - |

### 返回值

类型: `WebGL2RenderingContext \| null`

### 源代码

**位置**: [第 102 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L102)

```typescript
private createWebGL2(canvas: HTMLCanvasElement): WebGL2RenderingContext | null {
    return canvas.getContext('webgl2', this.webglOptions) as WebGL2RenderingContext | null
  }
```

---



文档生成时间：2026/1/31 13:13:59
