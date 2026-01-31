---
sidebar_position: 1
title: getRandomPosition 获取随机位置
---

## getRandomPosition

**类型**: `MethodDeclaration`

**所属类**: `SceneRegion`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

获取随机位置

参数 `terrain`: 地形码(-1:不限地形, 0:地面, 1:水面, 2:墙块)

返回值:场景坐标点

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `terrain` | `TerrainCode \| \-1` | - | -1 |

### 返回值

类型: `Point \| undefined`

场景坐标点

### 源代码

**位置**: [第 4382 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L4382)

```typescript
public getRandomPosition(terrain: TerrainCode | -1 = -1): Point | undefined {
    if (!this.parent) return undefined
    let x = 0
    let y = 0
    let count = 0
    const manager = this.parent.scene.terrain
    do {
      const l = this.x - this.width / 2
      const r = this.x + this.width / 2
      const t = this.y - this.height / 2
      const b = this.y + this.height / 2
      x = Math.randomBetween(l, r)
      y = Math.randomBetween(t, b)
    }
    // 如果指定了地形
    // 则最多循环1000次
    while (
      terrain !== -1 &&
      manager.get(Math.floor(x), Math.floor(y)) !== terrain &&
      ++count < 1000
    )
    return count < 1000 ? {x, y} : undefined
  }
```

---



文档生成时间：2026/1/31 13:13:59
