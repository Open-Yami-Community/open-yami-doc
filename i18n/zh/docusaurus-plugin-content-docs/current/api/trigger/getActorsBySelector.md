---
sidebar_position: 1
title: getActorsBySelector 获取指定选择器筛选的角色
---

## getActorsBySelector

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

获取指定选择器筛选的角色

存放到角色缓存列表

参数 `caster`: 技能施放角色

参数 `selector`: 选择器对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `caster` | `Actor \| null` | - | - |
| `selector` | `ActorSelector` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 509 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L509)

```typescript
private static getActorsBySelector(caster: Actor | null, selector: ActorSelector): void {
    const actors = this.actors
    let count = 0
    if (caster) {
      const inspector = Actor.inspectors[selector]
      const length = actors.count
      for (let i = 0; i < length; i++) {
        const actor = actors[i]!
        if (inspector(caster, actor)) {
          actors[count++] = actor
        }
      }
    }
    actors.count = count
  }
```

---



文档生成时间：2026/1/31 13:13:59
