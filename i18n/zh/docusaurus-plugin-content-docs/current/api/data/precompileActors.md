---
sidebar_position: 1
title: precompileActors 预编译角色数据
---

## precompileActors

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

预编译角色数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 316 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L316)

```typescript
private precompileActors(): void {
    const actors = Object.values(this.actors) as Array<ActorFile>
    for (const actor of actors) {
      actor.idleMotion = Enum.getValue(actor.idleMotion)
      actor.moveMotion = Enum.getValue(actor.moveMotion)
      this.compileEvents(actor, actor.path)
      this.setParentActor(actor)
    }
    this.inheritForEach(actors, this.inheritActor)
  }
```

---



文档生成时间：2026/1/31 13:13:58
