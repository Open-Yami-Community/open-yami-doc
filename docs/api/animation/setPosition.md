---
sidebar_position: 1
title: setPosition 设置动画在场景中的位置
---

## setPosition

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置动画在场景中的位置

参数 `position`: 具有场景坐标的对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `position` | `Point` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 296 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L296)

```typescript
public setPosition(position: Point): void {
    this.position = position
  }
```

---



文档生成时间：2026/1/31 13:13:58
