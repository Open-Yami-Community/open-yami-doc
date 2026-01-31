---
sidebar_position: 1
title: buildPath 使用寻路后的数据建立路径
---

## buildPath

**类型**: `MethodDeclaration`

**所属类**: `SceneDirectLightRenderer`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

使用寻路后的数据建立路径

参数 `startX`: 起点位置X

参数 `startY`: 起点位置Y

参数 `destX`: 终点位置X

参数 `destY`: 终点位置Y

参数 `endIndex`: 终点顶点索引

参数 `passage`: 角色通行区域

返回值:角色移动路径

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `startX` | `number` | - | - |
| `startY` | `number` | - | - |
| `destX` | `number` | - | - |
| `destY` | `number` | - | - |
| `endIndex` | `number` | - | - |
| `passage` | `number` | - | - |

### 返回值

类型: `MovementPath`

角色移动路径

### 源代码

**位置**: [第 6112 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L6112)

```typescript
private buildPath(startX: number, startY: number, destX: number, destY: number, endIndex: number, passage: number): MovementPath {
    const vertices = PathFinder.vertices
    const radius = ActorCollider.sceneCollisionRadius
    const caches = GL.arrays[1].float64
    let blocked = false
    let vi = endIndex
    let ci = caches.length
    caches[--ci] = destY
    caches[--ci] = destX
    while (true) {
      // 如果路径被阻挡
      if (vertices[vi + 5] == 1) {
        blocked = true
      }

      // 获取父节点索引
      vi = vertices[vi + 4]

      // 如果到达起点，跳出
      if (vertices[vi + 2] === 0) {
        break
      }

      // 插入中转点到缓存
      const x = vertices[vi]
      const y = vertices[vi + 1]
      caches[--ci] = y + 0.5
      caches[--ci] = x + 0.5
    }
    // 插入起点到缓存
    caches[--ci] = startY
    caches[--ci] = startX

    // 调整终点坐标(要求可通行)
    if (!blocked) {
      const width = PathFinder.width
      const height = PathFinder.height
      const terrains = PathFinder.terrains
      const i = caches.length - 2
      const x = Math.floor(caches[i])
      const y = Math.floor(caches[i + 1])
      const bi = x + y * width
      // 如果左边不可通行，限制水平位置避免撞墙
      if (x > 0 && terrains[bi - 1] !== passage) {
        caches[i] = Math.max(caches[i], x + radius)
      }
      // 如果右边不可通行，限制水平位置避免撞墙
      if (x < width - 1 && terrains[bi + 1] !== passage) {
        caches[i] = Math.min(caches[i], x + 1 - radius)
      }
      // 如果上边不可通行，限制垂直位置避免撞墙
      if (y > 0 && terrains[bi - width] !== passage) {
        caches[i + 1] = Math.max(caches[i + 1], y + radius)
      }
      // 如果下边不可通行，限制垂直位置避免撞墙
      if (y < height - 1 && terrains[bi + width] !== passage) {
        caches[i + 1] = Math.min(caches[i + 1], y + 1 - radius)
      }
    }

    // 调整最后一个拐点(如果存在)
    const pi = caches.length - 6
    if (!blocked && pi >= 0) {
      const px = caches[pi]
      const py = caches[pi + 1]
      const cx = caches[pi + 2]
      const cy = caches[pi + 3]
      const ex = Math.floor(caches[pi + 4])
      const ey = Math.floor(caches[pi + 5])
      const dist = Math.dist(cx, cy, px, py)
      for (let i = 1; i < dist; i++) {
        // 连接最后第2、3个点，计算插值节点
        const ratio = i / dist
        const x = cx * (1 - ratio) + px * ratio
        const y = cy * (1 - ratio) + py * ratio
        const dx = Math.floor(x)
        const dy = Math.floor(y)
        // 如果插值节点与终点可见，则设置最后第2个节点为该点
        if (PathFinder.isInLineOfSight(ex, ey, dx, dy, -1)) {
          caches[pi + 2] = x
          caches[pi + 3] = y
        } else {
          break
        }
      }
    }

    // 调整中转点坐标(碰撞半径不为0.5)
    if (radius !== 0.5) {
      const end = caches.length - 2
      for (let i = ci + 2; i < end; i += 2) {
        const x0 = caches[i]
        const y0 = caches[i + 1]
        const x1 = caches[i - 2]
        const y1 = caches[i - 1]
        const x2 = caches[i + 2]
        const y2 = caches[i + 3]
        const radian1 = Math.modRadians(Math.atan2(y1 - y0, x1 - x0))
        const radian2 = Math.modRadians(Math.atan2(y2 - y0, x2 - x0))
        // 求中转点拐角平分线的弧度
        const radian = Math.abs(radian1 - radian2) < Math.PI
        ? (radian1 + radian2) / 2
        : (radian1 + radian2) / 2 + Math.PI
        const horizontal = Math.cos(radian)
        const vertical = Math.sin(radian)
        const x = Math.floor(x0)
        const y = Math.floor(y0)
        // 假设中转点附近一定有墙的拐角，调整中转点，让它贴近墙面
        // 根据拐角平分线的水平和垂直分量来判定4个方位的拐角
        if (horizontal < -0.0001) caches[i] = x + radius
        if (horizontal > 0.0001) caches[i] = x + 1 - radius
        if (vertical < -0.0001) caches[i + 1] = y + radius
        if (vertical > 0.0001) caches[i + 1] = y + 1 - radius
      }
    }

    // 创建移动路径(不包括起点位置)
    const path = caches.slice(ci + 2) as MovementPath
    path.index = 0
    return path
  }
```

---



文档生成时间：2026/1/31 13:13:59
