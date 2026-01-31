---
sidebar_position: 1
title: updateTerrain 更新地形
---

## updateTerrain

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

更新地形

参数 `x`: 场景X

参数 `y`: 场景Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1042 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1042)

```typescript
public updateTerrain(x: number, y: number): void {
    const ti = x + y * this.width
    this.terrain.compositeArray[ti] =
    this.terrain.rawArray[ti] ||
    this.parallax.getTileTerrain(x, y)
  }
```

---



文档生成时间：2026/1/31 13:13:59
