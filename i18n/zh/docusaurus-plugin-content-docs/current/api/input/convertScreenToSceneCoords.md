---
sidebar_position: 1
title: convertScreenToSceneCoords 转换屏幕到场景坐标
---

## convertScreenToSceneCoords

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

转换屏幕到场景坐标

参数 `screenX`: 屏幕X

参数 `screenY`: 屏幕Y

返回值:场景坐标

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `screenX` | `number` | - | - |
| `screenY` | `number` | - | - |

### 返回值

类型: `Point`

场景坐标

### 源代码

**位置**: [第 666 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L666)

```typescript
public convertScreenToSceneCoords(screenX: number, screenY: number): Point {
    const point = this.sharedPoint
    const scene = Scene.binding
    if (scene === null) {
      point.x = 0
      point.y = 0
      return point
    }
    const x = Math.round(Camera.scrollLeft) + screenX / Camera.zoom
    const y = Math.round(Camera.scrollTop) + screenY / Camera.zoom
    point.x = x / scene.tileWidth
    point.y = y / scene.tileHeight
    return point
  }
```

---



文档生成时间：2026/1/31 13:13:59
