---
sidebar_position: 1
title: add 添加角色
---

## add

**类型**: `MethodDeclaration`

**定义位置**: [`filter.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/filter.ts)

### 描述

添加角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `Actor` | - | - |
| `color` | `ColorArray` | - | this.defaultColorArray |

### 返回值

类型: `void`

### 源代码

**位置**: [第 163 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/filter.ts#L163)

```typescript
public add(actor: Actor, color: ColorArray = this.defaultColorArray): void {
    if (!this.actorColorMap.has(actor)) {
      this.actorList.append(actor)
    }
    this.actorColorMap.set(actor, color)
  }
```

---



文档生成时间：2026/1/31 13:13:59
