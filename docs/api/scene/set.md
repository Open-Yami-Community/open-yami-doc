---
sidebar_position: 1
title: set 设置地形数据
---

## set

**类型**: `MethodDeclaration`

**所属类**: `SceneTerrainManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

设置地形数据

参数 `x`: 水平位置

参数 `y`: 垂直位置

参数 `terrain`: 地形码(0:地面, 1:水面, 2:墙块)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |
| `terrain` | `TerrainCode` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1960 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1960)

```typescript
public set(x: number, y: number, terrain: TerrainCode): void {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.rawArray[x + y * this.width] = terrain
      this.scene.updateTerrain(x, y)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
