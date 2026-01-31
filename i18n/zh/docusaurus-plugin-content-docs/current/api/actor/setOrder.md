---
sidebar_position: 1
title: setOrder 设置动画排序顺序
---

## setOrder

**类型**: `MethodDeclaration`

**所属类**: `AnimationManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置动画排序顺序

参数 `key`: 动画键

参数 `order`: 顺序

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |
| `order` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3044 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3044)

```typescript
public setOrder(key: string, order: number): void {
    const animation = this.keyMap[key]
    if (animation) {
      animation.order = order
      this.sort()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
