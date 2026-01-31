---
sidebar_position: 1
title: createRegion 创建区域
---

## createRegion

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建区域

参数 `node`: 预设区域数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `node` | `SceneRegionData` | - | - |

### 返回值

类型: `SceneRegion`

### 源代码

**位置**: [第 1308 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1308)

```typescript
public createRegion(node: SceneRegionData): SceneRegion {
    const region = new SceneRegion(node)
    region.selfVarId = node.presetId
    this.region.append(region)
    return Scene.latest = region
  }
```

---



文档生成时间：2026/1/31 13:13:59
