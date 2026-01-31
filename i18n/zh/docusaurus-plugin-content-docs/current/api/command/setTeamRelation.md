---
sidebar_position: 1
title: setTeamRelation 设置队伍关系
---

## setTeamRelation

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置队伍关系

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ teamId1, teamId2, relation, \}` | `\{
		teamId1\: string;
		teamId2\: string;
		relation\: 0 \| 1;
	\}` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 8784 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8784)

```typescript
protected setTeamRelation({
		teamId1,
		teamId2,
		relation,
	}: {
		teamId1: string;
		teamId2: string;
		relation: 0 | 1;
	}) {
		return () => {
			Team.changeRelation(teamId1, teamId2, relation);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
