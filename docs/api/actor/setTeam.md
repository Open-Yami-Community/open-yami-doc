---
sidebar_position: 1
title: setTeam 设置角色的队伍
---

## setTeam

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置角色的队伍

参数 `teamId`: 队伍ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `teamId` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1019 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1019)

```typescript
public setTeam(teamId: string): void {
		const team = Team.get(teamId);
		if (team !== undefined) {
			this.teamId = teamId;
			this.teamIndex = team.index;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
