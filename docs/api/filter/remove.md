---
sidebar_position: 1
title: remove 移除角色
---

## remove

**类型**: `MethodDeclaration`

**定义位置**: [`filter.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/filter.ts)

### 描述

移除角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `Actor` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 171 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/filter.ts#L171)

```typescript
public remove(actor: Actor): void {
    if (this.actorColorMap.delete(actor)) {
      this.actorList.remove(actor)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
