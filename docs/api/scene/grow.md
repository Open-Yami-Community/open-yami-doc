---
sidebar_position: 1
title: grow (尝试)扩大网格
---

## grow

**类型**: `MethodDeclaration`

**所属类**: `ScenePartitionManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

(尝试)扩大网格

参数 `scene`: 场景上下文对象

参数 `colliderSize`: 角色碰撞器大小

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `scene` | `SceneContext` | - | - |
| `colliderSize` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3503 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3503)

```typescript
public grow(scene: SceneContext, colliderSize: number): void {
    if (this.size < colliderSize && this.shiftBits < 4) {
      while (this.size < colliderSize && this.shiftBits < 4) {
        this.size = 1 << ++this.shiftBits
      }
      this.resize(scene)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
