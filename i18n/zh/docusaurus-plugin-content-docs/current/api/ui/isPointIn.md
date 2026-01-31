---
sidebar_position: 1
title: isPointIn 判断屏幕坐标点是否在元素区域内
---

## isPointIn

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

判断屏幕坐标点是否在元素区域内

参数 `x`: 屏幕X

参数 `y`: 屏幕Y

返回值:坐标点是否在元素内

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `boolean`

坐标点是否在元素内

### 源代码

**位置**: [第 1472 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1472)

```typescript
public isPointIn(x: number, y: number): boolean {
    const W = this.width
    const H = this.height
    // 如果区域面积为0，返回false
    if (W * H === 0) {
      return false
    }

    const matrix = this.matrix
    const L = this.x
    const T = this.y
    const R = L + W
    const B = T + H
    const a = matrix[0]
    const b = matrix[1]
    const c = matrix[3]
    const d = matrix[4]
    const e = matrix[6]
    const f = matrix[7]
    const x1 = a * L + c * T + e - x
    const y1 = b * L + d * T + f - y
    const x2 = a * L + c * B + e - x
    const y2 = b * L + d * B + f - y
    const x3 = a * R + c * B + e - x
    const y3 = b * R + d * B + f - y
    const x4 = a * R + c * T + e - x
    const y4 = b * R + d * T + f - y
    const cross1 = x1 * y2 - y1 * x2
    const cross2 = x2 * y3 - y2 * x3
    const cross3 = x3 * y4 - y3 * x4
    const cross4 = x4 * y1 - y4 * x1
    return (
      cross1 * cross2 >= 0 &&
      cross2 * cross3 >= 0 &&
      cross3 * cross4 >= 0 &&
      cross4 * cross1 >= 0
    )
  }
```

---



文档生成时间：2026/1/31 13:13:59
