---
sidebar_position: 1
title: deleteTile 删除图块
---

## deleteTile

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

删除图块

参数 `x`: 瓦片地图X

参数 `y`: 瓦片地图Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3156 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3156)

```typescript
public deleteTile(x: number, y: number): void {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      const ti = x + y * this.width
      if (this.tiles[ti] !== 0) {
        this.tiles[ti] = 0
        this.scene.updateTerrain(x, y)
        this.updateSurroundingAutoTiles(x, y)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
