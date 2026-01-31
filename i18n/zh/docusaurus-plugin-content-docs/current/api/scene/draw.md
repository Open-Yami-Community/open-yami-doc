---
sidebar_position: 1
title: draw 绘制场景光源
---

## draw

**类型**: `MethodDeclaration`

**所属类**: `SceneLight`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

绘制场景光源

参数 `projMatrix`: 投影矩阵

参数 `opacity`: 不透明度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `projMatrix` | `Matrix` | - | - |
| `opacity` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4921 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L4921)

```typescript
public draw(projMatrix: Matrix, opacity: number): void {
    switch (this.type) {
      case 'point':
        return this.drawPointLight(projMatrix, opacity)
      case 'area':
        return this.drawAreaLight(projMatrix, opacity)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
