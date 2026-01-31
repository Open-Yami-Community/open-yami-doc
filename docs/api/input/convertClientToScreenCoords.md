---
sidebar_position: 1
title: convertClientToScreenCoords 转换客户端到屏幕坐标
---

## convertClientToScreenCoords

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

转换客户端到屏幕坐标

参数 `clientX`: 客户端X

参数 `clientY`: 客户端Y

返回值:屏幕坐标

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `clientX` | `number` | - | - |
| `clientY` | `number` | - | - |

### 返回值

类型: `Point`

屏幕坐标

### 源代码

**位置**: [第 642 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L642)

```typescript
public convertClientToScreenCoords(clientX: number, clientY: number): Point {
    const point = this.sharedPoint
    switch (this.rotated) {
      case false:
        // 屏幕未旋转的情况
        point.x = Math.round((clientX - this.left) * this.ratioX - 0.0001)
        point.y = Math.round((clientY - this.top) * this.ratioY - 0.0001)
        break
      case true:
        // 屏幕旋转90度的情况
        point.x = Math.round((clientY - this.top) * this.ratioX - 0.0001)
        point.y = Math.round((this.right - clientX) * this.ratioY - 0.0001)
        break
    }
    return point
  }
```

---



文档生成时间：2026/1/31 13:13:59
