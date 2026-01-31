---
sidebar_position: 1
title: isInWallBlock 判断目标点是否在墙块中
---

## isInWallBlock

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

判断目标点是否在墙块中

参数 `x`: 场景坐标X

参数 `y`: 场景坐标Y

返回值:目标点是否在墙块中

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `boolean`

目标点是否在墙块中

### 源代码

**位置**: [第 1498 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1498)

```typescript
public isInWallBlock(x: number, y: number): boolean {
    return this.terrain.get(Math.floor(x), Math.floor(y)) === 0b10
  }
```

---



文档生成时间：2026/1/31 13:13:59
