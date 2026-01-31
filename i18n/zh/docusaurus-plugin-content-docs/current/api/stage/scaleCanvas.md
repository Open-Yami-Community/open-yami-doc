---
sidebar_position: 1
title: scaleCanvas 缩放画布
---

## scaleCanvas

**类型**: `MethodDeclaration`

**定义位置**: [`stage.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/stage.ts)

### 描述

缩放画布

参数 `width`: 画布宽度

参数 `height`: 画布高度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `width` | `number` | - | - |
| `height` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 53 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/stage.ts#L53)

```typescript
private scaleCanvas(width: number, height: number): void {
    const canvasWidth = width
    const canvasHeight = height
    const parentWidth = window.innerWidth
    const parentHeight = window.innerHeight
    const {container} = GL
    // 禁止旋转容器元素
    container.style.transform = ''
    if (canvasWidth / canvasHeight >= parentWidth / parentHeight) {
      // 如果画布宽高比大于容器宽高比，则上下留黑边
      const scaledHeight = Math.round(canvasHeight / canvasWidth * parentWidth)
      container.style.left = '0'
      container.style.top = `${parentHeight - scaledHeight >> 1}px`
      container.style.width = `${parentWidth}px`
      container.style.height = `${scaledHeight}px`
    } else {
      // 如果画布宽高比小于容器宽高比，则左右留黑边
      const scaledWidth = Math.round(canvasWidth / canvasHeight * parentHeight)
      container.style.left = `${parentWidth - scaledWidth >> 1}px`
      container.style.top = '0'
      container.style.width = `${scaledWidth}px`
      container.style.height = `${parentHeight}px`
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
