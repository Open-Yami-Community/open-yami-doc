---
sidebar_position: 1
title: changeActorTeam 改变角色队伍
---

## changeActorTeam

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

改变角色队伍

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, teamId, \}` | `\{
		actor\: ActorGetter;
		teamId\: string;
	\}` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 6918 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6918)

```typescript
protected changeActorTeam({
		actor,
		teamId,
	}: {
		actor: ActorGetter;
		teamId: string;
	}) {
		const getActor = Command.compileActor(actor);
		return () => {
			getActor()?.setTeam(teamId);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
