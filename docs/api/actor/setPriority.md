---
sidebar_position: 1
title: setPriority 设置动画渲染优先级(粒子)
---

## setPriority

**类型**: `MethodDeclaration`

**所属类**: `AnimationManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置动画渲染优先级(粒子)

参数 `angle`: 角度(弧度)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `priority` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3033 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3033)

```typescript
public setPriority(priority: number): void {
    for (const animation of this.list) {
      animation.priority = priority
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
