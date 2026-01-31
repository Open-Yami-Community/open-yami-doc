---
sidebar_position: 1
title: computeBoundingRectangle 计算外接矩形
---

## computeBoundingRectangle

**类型**: `MethodDeclaration`

**所属类**: `ImageElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

计算外接矩形

返回值:外接矩形左上和右下两点位置[x1, y1, x2, y2]

### 返回值

类型: `Float64Array`

外接矩形左上和右下两点位置[x1, y1, x2, y2]

### 源代码

**位置**: [第 2053 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L2053)

```typescript
private computeBoundingRectangle(): Float64Array {
    const matrix = this.matrix
    const L = this.x
    const T = this.y
    const R = L + this.width
    const B = T + this.height
    const a = matrix[0]
    const b = matrix[1]
    const c = matrix[3]
    const d = matrix[4]
    const e = matrix[6]
    const f = matrix[7]
    const x1 = a * L + c * T + e
    const y1 = b * L + d * T + f
    const x2 = a * L + c * B + e
    const y2 = b * L + d * B + f
    const x3 = a * R + c * B + e
    const y3 = b * R + d * B + f
    const x4 = a * R + c * T + e
    const y4 = b * R + d * T + f
    const vertices = ImageElement.sharedFloat64Array
    vertices[0] = Math.min(x1, x2, x3, x4)
    vertices[1] = Math.min(y1, y2, y3, y4)
    vertices[2] = Math.max(x1, x2, x3, x4)
    vertices[3] = Math.max(y1, y2, y3, y4)
    return vertices
  }
```

---



文档生成时间：2026/1/31 13:13:59
