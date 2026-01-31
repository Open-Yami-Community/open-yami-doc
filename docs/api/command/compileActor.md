---
sidebar_position: 1
title: compileActor 编译角色对象
---

## compileActor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译角色对象

参数 `actor`: 角色访问器

返回值:角色访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `ActorGetter` | - | - |

### 返回值

类型: `() =&gt; Actor \| undefined`

角色访问器函数

### 源代码

**位置**: [第 497 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L497)

```typescript
public compileActor(actor: ActorGetter): () => Actor | undefined {
		switch (actor.type) {
			case "trigger":
				return () => Command.filterValidObject(CurrentEvent.triggerActor);
			case "caster":
				return () => Command.filterValidObject(CurrentEvent.casterActor);
			case "latest":
				return () => Command.filterValidObject(Actor.latest);
			case "target":
				return () => Command.filterValidObject(CurrentEvent.targetActor);
			case "player":
				return () => Command.filterValidObject(Party.player ?? undefined);
			case "member": {
				const getMemberId = Command.compileNumber(actor.memberId);
				return () => Party.members[getMemberId()];
			}
			case "global": {
				const { actorId } = actor;
				return () => ActorManager.get(actorId);
			}
			case "by-id": {
				const { presetId } = actor;
				return () => {
					return Scene.entity.get(presetId) as Actor | undefined;
				};
			}
			case "variable": {
				const getActor = Command.compileVariable(
					actor.variable,
					Attribute.ACTOR_GET
				);
				return () => Command.filterValidObject(getActor());
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
