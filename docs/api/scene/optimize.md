---
sidebar_position: 1
title: optimize 优化中小型场景的最小分区大小
---

## optimize

**类型**: `MethodDeclaration`

**所属类**: `ScenePartitionManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

优化中小型场景的最小分区大小

参数 `scene`: 场景上下文对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `scene` | `SceneContext` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3460 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3460)

```typescript
public optimize(scene: SceneContext): void {
    const size = scene.width * scene.height
    if (size <= 16384) {
      this.size = 1
      this.shiftBits = 0
      this.minShiftBits = 0
    } else if (size <= 65536) {
      this.size = 2
      this.shiftBits = 1
      this.minShiftBits = 1
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
