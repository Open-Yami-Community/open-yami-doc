---
sidebar_position: 1
title: changeRelation 改变角色队伍的关系
---

## changeRelation

**类型**: `MethodDeclaration`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

改变角色队伍的关系

参数 `teamId1`: 队伍ID1

参数 `teamId2`: 队伍ID2

参数 `relation`: 队伍1和队伍2的关系(0:敌对, 1:友好)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `teamId1` | `string` | - | - |
| `teamId2` | `string` | - | - |
| `relation` | `0 \| 1` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 198 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L198)

```typescript
public changeRelation(
		teamId1: string,
		teamId2: string,
		relation: 0 | 1
	): void {
		const team1 = this.get(teamId1);
		const team2 = this.get(teamId2);
		if (team1 && team2) {
			team1.relations[teamId2] = relation;
			team2.relations[teamId1] = relation;
			this.relationMap[team1.index | (team2.index << 8)] = relation;
			this.relationMap[team2.index | (team1.index << 8)] = relation;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:57
