---
sidebar_position: 1
title: convertToScreenCoords 将场景坐标转换为屏幕坐标
---

## convertToScreenCoords

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

将场景坐标转换为屏幕坐标

参数 `scenePos`: 拥有场景坐标的对象

返回值:场景坐标点(公共)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `scenePos` | `Point` | - | - |

### 返回值

类型: `Point`

场景坐标点(公共)

### 源代码

**位置**: [第 420 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L420)

```typescript
public convertToScreenCoords(scenePos: Point): Point {
    const point = Scene.sharedPoint
    const x = scenePos.x * Scene.binding!.tileWidth
    const y = scenePos.y * Scene.binding!.tileHeight
    point.x = (x - this.scrollLeft) / this.width * GL.width
    point.y = (y - this.scrollTop) / this.height * GL.height
    return point
  }
```

---



文档生成时间：2026/1/31 13:13:58
