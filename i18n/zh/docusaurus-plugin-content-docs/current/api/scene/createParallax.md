---
sidebar_position: 1
title: createParallax 创建视差图
---

## createParallax

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建视差图

参数 `node`: 预设视差图数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `node` | `SceneParallaxData` | - | - |

### 返回值

类型: `SceneParallax`

### 源代码

**位置**: [第 1330 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1330)

```typescript
public createParallax(node: SceneParallaxData): SceneParallax {
    const parallax = new SceneParallax(node)
    parallax.selfVarId = node.presetId
    this.parallax.append(parallax)
    return Scene.latest = parallax
  }
```

---



文档生成时间：2026/1/31 13:13:59
