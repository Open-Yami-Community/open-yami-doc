---
sidebar_position: 1
title: getParallaxAnchor 获取视差图锚点
---

## getParallaxAnchor

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

获取视差图锚点

参数 `parallax`: 视差图或瓦片地图对象

返回值:视差图锚点位置(共享对象)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `parallax` | `SceneParallax \| SceneTilemap` | - | - |

### 返回值

类型: `Point`

视差图锚点位置(共享对象)

### 源代码

**位置**: [第 592 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L592)

```typescript
public getParallaxAnchor(parallax: SceneParallax | SceneTilemap): Point {
    const point = this.sharedPoint
    const scene = this.binding!
    const tw = scene.tileWidth
    const th = scene.tileHeight
    const cx = Camera.scrollCenterX
    const cy = Camera.scrollCenterY
    const px = parallax.x * tw
    const py = parallax.y * th
    const fx = parallax.parallaxFactorX
    const fy = parallax.parallaxFactorY
    point.x = cx + fx * (px - cx)
    point.y = cy + fy * (py - cy)
    return point
  }
```

---



文档生成时间：2026/1/31 13:13:59
