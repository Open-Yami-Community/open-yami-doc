---
sidebar_position: 1
title: resize 调整场景网格分区的数量
---

## resize

**类型**: `MethodDeclaration`

**所属类**: `ScenePartitionManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

调整场景网格分区的数量

参数 `scene`: 场景上下文对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `scene` | `SceneContext` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3477 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3477)

```typescript
public resize(scene: SceneContext): void {
    // 根据场景大小调整分区数量
    const cells = this.cells.slice()
    const width = Math.ceil(scene.width / this.size)
    const height = Math.ceil(scene.height / this.size)
    const length = width * height
    this.width = width
    this.height = height
    this.cells.length = length
    for (let i = 0; i < length; i++) {
      this.cells[i] = []
    }
    // 重新添加角色到网格中
    for (const cell of cells) {
      for (const actor of cell as Array<ObjectInCell>) {
        actor.cellId = -1
        this.append(actor)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
