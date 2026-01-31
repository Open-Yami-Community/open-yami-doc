---
sidebar_position: 1
title: createPath 创建路径(Lazy Theta*寻路算法)
---

## createPath

**类型**: `MethodDeclaration`

**所属类**: `SceneDirectLightRenderer`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建路径(Lazy Theta*寻路算法)

参数 `startX`: 起点位置X

参数 `startY`: 起点位置Y

参数 `destX`: 终点位置X

参数 `destY`: 终点位置Y

参数 `passage`: 角色通行区域

参数 `bypass`: 是否绕过角色

返回值:角色移动路径

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `startX` | `number` | - | - |
| `startY` | `number` | - | - |
| `destX` | `number` | - | - |
| `destY` | `number` | - | - |
| `passage` | `number` | - | - |
| `bypass` | `boolean` | - | - |

### 返回值

类型: `MovementPath`

角色移动路径

### 源代码

**位置**: [第 6012 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L6012)

```typescript
public createPath(startX: number, startY: number, destX: number, destY: number, passage: number, bypass: boolean): MovementPath {
    const scene = Scene.binding!
    const sx = Math.floor(startX)
    const sy = Math.floor(startY)
    const dx = Math.floor(destX)
    const dy = Math.floor(destY)
    const width = PathFinder.width = scene.width
    const height = PathFinder.height = scene.height
    // 如果起点和终点在同一网格，或不受地形限制，或处于场景网格之外，返回单位路径
    if (sx === dx && sy === dy || passage === -1 ||
      sx < 0 || sx >= width || sy < 0 || sy >= height ||
      dx < 0 || dx >= width || dy < 0 || dy >= height) {
      return PathFinder.createUnitPath(destX, destY)
    }
    // 设置终点权重(权重越高，寻路计算步骤越少，计算出来的可能不是最佳路线)
    const H_WEIGHT = 1.25
    const startIndex = (sx + sy * 512) * 6
    const {vertices, openset, queue, offsets} = PathFinder
    // 设置绕开角色开关
    PathFinder.setBypass(bypass)
    // 获取场景地形
    PathFinder.terrains = scene.terrain.compositeArray
    // 获取场景障碍
    PathFinder.obstacles = scene.obstacle.array
    // 设置寻路阈值，期望值达到阈值后放弃计算
    PathFinder.threshold = Math.dist(sx, sy, dx, dy) + PathFinder.maxExtraCost
    // 打开起点
    PathFinder.openVertex(sx, sy, 0, 0, startIndex, false)
    // 循环更新顶点队列
    while (PathFinder.updateQueue()) {
      for (let i = 0; i < PathFinder.queueCount; i++) {
        // 获取队列中的顶点数据，再将其关闭
        const oi = queue[i]
        const vi = openset[oi] - 1
        const tx = vertices[vi    ]
        const ty = vertices[vi + 1]
        const c = vertices[vi + 2]
        const pi = vertices[vi + 4]
        const px = vertices[pi    ]
        const py = vertices[pi + 1]
        const pc = vertices[pi + 2]
        PathFinder.closeVertex(oi)
        // 如果到达终点，擦除数据并建立路径
        if (tx === dx && ty === dy) {
          PathFinder.clear()
          return this.buildPath(startX, startY, destX, destY, vi, passage)
        }
        // 遍历8个偏移方向的顶点
        for (let i = 0; i < 16; i += 2) {
          const nx = tx + offsets[i]
          const ny = ty + offsets[i + 1]
          // 如果顶点在有效网格区域内
          if (tx >= 0 && tx < width && ty >= 0 && ty < height) {
            const cost = PathFinder.calculateExtraCostBetween(tx, ty, nx, ny, passage)
            if (cost === 0 && PathFinder.isInLineOfSight(px, py, nx, ny, passage)) {
              // 如果相邻网格可通行，且与父节点可见
              // 则计算到父节点的成本和到终点的期望值，打开该顶点
              const nc = pc + Math.dist(nx, ny, px, py)
              const ne = nc + Math.dist(nx, ny, dx, dy) * H_WEIGHT
              PathFinder.openVertex(nx, ny, nc, ne, pi, false)
            } else {
              // 否则计算相邻成本，增加额外成本
              // 以及计算到终点的期望值，打开该顶点
              const nc = c + Math.dist(nx, ny, tx, ty) + cost
              const ne = nc + Math.dist(nx, ny, dx, dy) * H_WEIGHT
              PathFinder.openVertex(nx, ny, nc, ne, vi, cost !== 0)
            }
          }
        }
      }
    }
    PathFinder.clear()
    // 没有找到路径，返回单位路径
    return PathFinder.createUnitPath(destX, destY)
  }
```

---



文档生成时间：2026/1/31 13:13:59
