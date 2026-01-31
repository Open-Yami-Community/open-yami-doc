---
sidebar_position: 1
title: createTilemap 创建瓦片地图
---

## createTilemap

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建瓦片地图

参数 `node`: 预设瓦片地图数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `node` | `SceneTilemapData` | - | - |

### 返回值

类型: `SceneTilemap`

### 源代码

**位置**: [第 1341 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1341)

```typescript
public createTilemap(node: SceneTilemapData): SceneTilemap {
    const tilemap = new SceneTilemap(this, node)
    tilemap.selfVarId = node.presetId
    this.parallax.append(tilemap)
    return Scene.latest = tilemap
  }
```

---



文档生成时间：2026/1/31 13:13:59
