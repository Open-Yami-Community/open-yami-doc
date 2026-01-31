---
sidebar_position: 1
title: createUnitPath 创建单位移动路径
---

## createUnitPath

**类型**: `MethodDeclaration`

**所属类**: `SceneDirectLightRenderer`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建单位移动路径

参数 `destX`: 终点位置X

参数 `destY`: 终点位置Y

返回值:角色移动路径

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `destX` | `number` | - | - |
| `destY` | `number` | - | - |

### 返回值

类型: `MovementPath`

角色移动路径

### 源代码

**位置**: [第 6094 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L6094)

```typescript
public createUnitPath(destX: number, destY: number): MovementPath {
    const path = new Float64Array(2) as MovementPath
    path[0] = destX
    path[1] = destY
    path.index = 0
    return path
  }
```

---



文档生成时间：2026/1/31 13:13:59
