---
sidebar_position: 1
title: contextReset 图层上下文方法 - 重置
---

## contextReset

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

图层上下文方法 - 重置

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `this` | `AnimationFrameContext` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1066 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1066)

```typescript
private static contextReset(this: AnimationFrameContext): void {
    const parent = this.parent
    const matrix = this.matrix
    if (parent !== null) {
      // 从父级图层继承属性
      matrix.set(parent.matrix)
      this.opacity = parent.opacity
    } else {
      // 没有父级图层的情况
      matrix.set(AnimationPlayer.matrix)
      this.opacity = this.animation.opacity
    }
    this.frame = null
  }
```

---



文档生成时间：2026/1/31 13:13:58
