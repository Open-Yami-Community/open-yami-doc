---
sidebar_position: 1
title: getTileTag 
---

## getTileTag

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `number`

### 源代码

**位置**: [第 2809 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2809)

```typescript
public getTileTag(x: number, y: number): number {
    if (x >= this.tileStartX && x < this.tileEndX && y >= this.tileStartY && y < this.tileEndY) {
      const tx = x - this.tileStartX
      const ty = y - this.tileStartY
      const tile = this.tiles[tx + ty * this.width]
      return this.tileData[tile & 0xffffff00]?.tag ?? 0
    }
    return 0
  }
```

---



文档生成时间：2026/1/31 13:13:59
