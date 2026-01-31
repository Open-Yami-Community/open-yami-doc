---
sidebar_position: 1
title: sort 排序图层
---

## sort

**类型**: `MethodDeclaration`

**所属类**: `SceneParallaxGroup`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

排序图层

### 返回值

类型: `this`

### 源代码

**位置**: [第 2314 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2314)

```typescript
public sort(): this {
    return super.sort(SceneParallaxGroup.sorter)
  }
```

---



文档生成时间：2026/1/31 13:13:59
