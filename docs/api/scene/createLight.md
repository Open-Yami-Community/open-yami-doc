---
sidebar_position: 1
title: createLight 创建光源
---

## createLight

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建光源

参数 `node`: 预设光源数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `node` | `SceneLightData` | - | - |

### 返回值

类型: `SceneLight`

### 源代码

**位置**: [第 1319 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1319)

```typescript
public createLight(node: SceneLightData): SceneLight {
    const light = new SceneLight(node)
    light.selfVarId = node.presetId
    this.light.append(light)
    return Scene.latest = light
  }
```

---



文档生成时间：2026/1/31 13:13:59
