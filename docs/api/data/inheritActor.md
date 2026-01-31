---
sidebar_position: 1
title: inheritActor 继承父级角色的数据
---

## inheritActor

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

继承父级角色的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `ActorFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 338 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L338)

```typescript
private inheritActor(actor: ActorFile): void {
    if (actor.parent) {
      Data.mergeArrayByProperty(actor.attributes, actor.parent.attributes, 'key')
      Data.mergeArrayByProperty(actor.skills, actor.parent.skills, 'id')
      Data.mergeArrayByProperty(actor.equipments, actor.parent.equipments, 'slot')
      actor.inventory = actor.parent.inventory.concat(actor.inventory)
      Object.setPrototypeOf(actor.events, actor.parent.events)
      Data.mergeScripts(actor.scripts, actor.parent.scripts)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
