---
sidebar_position: 1
title: setMaxColliderSize 设置最大的角色碰撞器大小
---

## setMaxColliderSize

**类型**: `MethodDeclaration`

**所属类**: `SceneActorManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

设置最大的角色碰撞器大小

参数 `size`: 大小

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `size` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3730 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3730)

```typescript
private setMaxColliderSize(size: number): void {
    if (this.scene.maxColliderHalf !== size / 2) {
      this.scene.maxColliderHalf = size / 2
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
