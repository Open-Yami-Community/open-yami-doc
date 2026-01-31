---
sidebar_position: 1
title: getTile 获取图块ID
---

## getTile

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

获取图块ID

参数 `x`: 瓦片地图X

参数 `y`: 瓦片地图Y

返回值:图块ID(空图块:0，不存在:-1)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `number`

图块ID(空图块:0，不存在:-1)

### 源代码

**位置**: [第 3099 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3099)

```typescript
public getTile(x: number, y: number): number {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      const ti = x + y * this.width
      return this.tiles[ti] ?? -1
    }
    return -1
  }
```

---



文档生成时间：2026/1/31 13:13:59
