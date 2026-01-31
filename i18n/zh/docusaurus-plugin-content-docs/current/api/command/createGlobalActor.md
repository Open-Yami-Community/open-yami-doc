---
sidebar_position: 1
title: createGlobalActor 创建全局角色
---

## createGlobalActor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

创建全局角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actorId, teamId, \}` | `\{
		actorId\: string;
		teamId\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7390 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7390)

```typescript
protected createGlobalActor({
		actorId,
		teamId,
	}: {
		actorId: string;
		teamId: string;
	}): CommandFunction {
		return () => {
			ActorManager.create(actorId)?.setTeam(teamId);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
