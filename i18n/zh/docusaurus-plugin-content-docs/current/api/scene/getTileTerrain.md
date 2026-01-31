---
sidebar_position: 1
title: getTileTerrain 获取指定位置的图块地形
---

## getTileTerrain

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

获取指定位置的图块地形

参数 `x`: 场景X(整数)

参数 `y`: 场景Y(整数)

返回值:地形编码

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `TerrainCode`

地形编码

### 源代码

**位置**: [第 2799 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2799)

```typescript
public getTileTerrain(x: number, y: number): TerrainCode {
    if (x >= this.tileStartX && x < this.tileEndX && y >= this.tileStartY && y < this.tileEndY) {
      const tx = x - this.tileStartX
      const ty = y - this.tileStartY
      const tile = this.tiles[tx + ty * this.width]
      return this.tileData[tile & 0xffffff00]?.terrain ?? 0
    }
    return 0
  }
```

---



文档生成时间：2026/1/31 13:13:59
