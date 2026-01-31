---
sidebar_position: 1
title: createActor 创建角色
---

## createActor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

创建角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actorId, teamId, position, angle, \}` | `\{
		actorId\: string;
		teamId\: string;
		position\: PositionGetter;
		angle\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 6280 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6280)

```typescript
protected createActor({
		actorId,
		teamId,
		position,
		angle,
	}: {
		actorId: string;
		teamId: string;
		position: PositionGetter;
		angle: number | VariableGetter;
	}): CommandFunction | null {
		const getPoint = Command.compilePosition(position);
		const getDegrees = Command.compileNumber(angle);
		const data = Data.actors[actorId];
		return !data
			? null
			: () => {
					if (Scene.binding !== null) {
						const point = getPoint();
						if (point) {
							const actor = new Actor(data);
							actor.setTeam(teamId);
							actor.setPosition(point.x, point.y);
							actor.updateAngle(Math.radians(getDegrees()));
							Scene.actor.append(actor);
						}
					}
					return true;
			  };
	}
```

---



文档生成时间：2026/1/31 13:13:58
