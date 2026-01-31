---
sidebar_position: 1
title: createCanvas 创建画布元素
---

## createCanvas

**类型**: `MethodDeclaration`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

创建画布元素

### 返回值

类型: `HTMLCanvasElement`

### 源代码

**位置**: [第 89 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L89)

```typescript
private createCanvas(): HTMLCanvasElement {
    const canvas = document.createElement('canvas')
    canvas.width = 0
    canvas.height = 0
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    return canvas
  }
```

---



文档生成时间：2026/1/31 13:13:59
