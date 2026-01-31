---
sidebar_position: 1
title: isInLineOfSight 判断起点和终点是否在视线内可见
---

## isInLineOfSight

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

判断起点和终点是否在视线内可见

参数 `sx`: 起点场景X

参数 `sy`: 起点场景Y

参数 `dx`: 终点场景X

参数 `dy`: 终点场景Y

返回值:是否可见

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `sx` | `number` | - | - |
| `sy` | `number` | - | - |
| `dx` | `number` | - | - |
| `dy` | `number` | - | - |

### 返回值

类型: `boolean`

是否可见

### 源代码

**位置**: [第 1510 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1510)

```typescript
public isInLineOfSight(sx: number, sy: number, dx: number, dy: number): boolean {
    const width = this.width
    const height = this.height
    // 如果坐标点在场景网格外，返回false(不可视)
    if (sx < 0 || sx >= width ||
      sy < 0 || sy >= height ||
      dx < 0 || dx >= width ||
      dy < 0 || dy >= height) {
      return false
    }
    const terrains = this.terrain.compositeArray
    const tsx = Math.floor(sx)
    const tsy = Math.floor(sy)
    const tdx = Math.floor(dx)
    const tdy = Math.floor(dy)
    if (tsx !== tdx) {
      // 如果水平网格坐标不同
      const unitY = (dy - sy) / (dx - sx)
      const step = sx < dx ? 1 : -1
      const start = tsx + step
      const end = tdx + step
      // 在水平方向上栅格化相交的地形
      for (let x = start; x !== end; x += step) {
        const _x = step > 0 ? x : x + 1
        const y = Math.floor(sy + (_x - sx) * unitY)
        // 连接起点和终点，连线被垂直网格线切分成若干点
        // 如果其中一个交点的网格区域是墙块，则不可视
        if (terrains[x + y * width] === 0b10) {
          return false
        }
      }
    }
    if (tsy !== tdy) {
      // 如果垂直网格坐标不同
      const unitX = (dx - sx) / (dy - sy)
      const step = sy < dy ? 1 : -1
      const start = tsy + step
      const end = tdy + step
      // 在垂直方向上栅格化相交的地形
      for (let y = start; y !== end; y += step) {
        const _y = step > 0 ? y : y + 1
        const x = Math.floor(sx + (_y - sy) * unitX)
        // 连接起点和终点，连线被水平网格线切分成若干点
        // 如果其中一个交点的网格区域是墙块，则不可视
        if (terrains[x + y * width] === 0b10) {
          return false
        }
      }
    }
    // 如果起点和终点的网格区域都不是墙块，则可视
    return terrains[tsx + tsy * width] !== 0b10 &&
           terrains[tdx + tdy * width] !== 0b10
  }
```

---



文档生成时间：2026/1/31 13:13:59
