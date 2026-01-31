---
sidebar_position: 1
title: setMaxGridCellSize 设置最大的网格分区大小
---

## setMaxGridCellSize

**类型**: `MethodDeclaration`

**所属类**: `SceneActorManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

设置最大的网格分区大小

参数 `size`: 大小

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `size` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3740 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3740)

```typescript
private setMaxGridCellSize(size: number): void {
    if (this.scene.maxGridCellSize !== size) {
      if (this.scene.maxGridCellSize < size) {
        this.partition.grow(this.scene, size)
      } else {
        this.partition.shrink(this.scene, size)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
