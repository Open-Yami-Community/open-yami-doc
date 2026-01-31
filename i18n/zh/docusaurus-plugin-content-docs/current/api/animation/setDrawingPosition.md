---
sidebar_position: 1
title: setDrawingPosition 设置动画绘制在屏幕中的位置
---

## setDrawingPosition

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置动画绘制在屏幕中的位置

参数 `x`: 场景X

参数 `y`: 场景Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 305 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L305)

```typescript
private setDrawingPosition(x: number, y: number): void {
    const matrix = AnimationPlayer.matrix.set6f(1, 0, 0, 1, x, y)
    // 设置镜像
    if (this.mirror) {
      matrix.mirrorh()
    }
    // 设置垂直偏移
    if (this.offsetY !== 0) {
      matrix.translateY(this.offsetY)
    }
    // 设置旋转
    if (this.rotation !== 0) {
      matrix.rotate(this.rotation)
    }
    // 设置缩放
    if (this.scale !== 1) {
      matrix.scale(this.scale, this.scale)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
