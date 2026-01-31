---
sidebar_position: 1
title: resize 重新调整位置
---

## resize

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

重新调整位置

### 返回值

类型: `void`

### 源代码

**位置**: [第 589 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L589)

```typescript
public resize(): void {
    const container = GL.container
    const canvas = GL.canvas
    const rect = container.getBoundingClientRect()
    Mouse.rotated = container.style.transform === 'rotate(90deg)'
    Mouse.left = rect.left
    Mouse.top = rect.top
    Mouse.right = rect.right
    switch (Mouse.rotated) {
      case false:
        // 屏幕未旋转的情况
        Mouse.ratioX = canvas.width / rect.width
        Mouse.ratioY = canvas.height / rect.height
        break
      case true:
        // 屏幕旋转90度的情况
        Mouse.ratioX = canvas.width / rect.height
        Mouse.ratioY = canvas.height / rect.width
        break
    }
    // 重新计算坐标
    Mouse.calculateCoords(Mouse.eventCache)
  }
```

---



文档生成时间：2026/1/31 13:13:59
