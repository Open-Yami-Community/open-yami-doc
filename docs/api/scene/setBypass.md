---
sidebar_position: 1
title: setBypass 设置绕开角色开关
---

## setBypass

**类型**: `MethodDeclaration`

**所属类**: `SceneDirectLightRenderer`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

设置绕开角色开关

参数 `bypass`: 是否绕开角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `bypass` | `boolean` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 6356 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L6356)

```typescript
private setBypass(bypass: boolean): void {
    switch (bypass) {
      case false:
        this.calculateExtraCostBetween = PathFinder.normalCalculateExtraCostBetween
        this.isInLineOfSight = PathFinder.normalIsInLineOfSight
        break
      case true:
        this.calculateExtraCostBetween = PathFinder.bypassCalculateExtraCostBetween
        this.isInLineOfSight = PathFinder.bypassIsInLineOfSight
        break
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
