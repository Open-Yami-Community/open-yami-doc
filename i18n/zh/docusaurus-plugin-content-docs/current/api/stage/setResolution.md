---
sidebar_position: 1
title: setResolution 设置分辨率
---

## setResolution

**类型**: `MethodDeclaration`

**定义位置**: [`stage.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/stage.ts)

### 描述

设置分辨率

参数 `width`: 分辨率宽度

参数 `height`: 分辨率高度

参数 `sceneScale`: 场景缩放系数

参数 `uiScale`: 界面缩放系数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `width` | `number` | - | - |
| `height` | `number` | - | - |
| `sceneScale` | `number` | - | - |
| `uiScale` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 39 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/stage.ts#L39)

```typescript
public setResolution(width: number, height: number, sceneScale: number, uiScale: number): void {
    this.width = width
    this.height = height
    this.resize()
    Mouse.resize()
    Scene.setScale(sceneScale)
    UI.setScale(uiScale)
  }
```

---



文档生成时间：2026/1/31 13:13:59
