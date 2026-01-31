---
sidebar_position: 1
title: isValidPosition 检查分区的位置是否有效
---

## isValidPosition

**类型**: `MethodDeclaration`

**所属类**: `ScenePartitionManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

检查分区的位置是否有效

参数 `cellX`: 分区X

参数 `cellY`: 分区Y

返回值:在有效范围内

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `cellX` | `number` | - | - |
| `cellY` | `number` | - | - |

### 返回值

类型: `boolean`

在有效范围内

### 源代码

**位置**: [第 3618 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3618)

```typescript
private isValidPosition(cellX: number, cellY: number): boolean {
    return cellX >= 0 && cellX < this.width && cellY >= 0 && cellY < this.height
  }
```

---



文档生成时间：2026/1/31 13:13:59
