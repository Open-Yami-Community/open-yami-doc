---
sidebar_position: 1
title: setParentActor 设置父级角色的引用
---

## setParentActor

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

设置父级角色的引用

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `ActorFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 328 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L328)

```typescript
private setParentActor(actor: ActorFile): void {
    if (actor.inherit !== '' && actor.inherit !== actor.id) {
      const parent = Data.actors[actor.inherit]
      if (parent !== undefined) {
        actor.parent = parent
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
