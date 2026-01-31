---
sidebar_position: 1
title: getActor 获取角色
---

## getActor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

获取角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ variable, position, area, size, radius, selector, teamId, condition, attribute, divisor, activation, exclusion, exclusionActor, exclusionTeamId, active, \}` | `\{
		variable\: VariableGetter;
		position\: PositionGetter;
		area\: "circle" \| "square";
		size\?\: number;
		radius\?\: number;
		selector\: "enemy" \| "friend" \| "team" \| "any";
		teamId\?\: string;
		condition\:
			\| "nearest"
			\| "farthest"
			\| "min\-attribute\-value"
			\| "max\-attribute\-value"
			\| "min\-attribute\-ratio"
			\| "max\-attribute\-ratio"
			\| "random";
		attribute\?\: string;
		divisor\?\: string;
		activation\: "active" \| "inactive" \| "either";
		exclusion\: string;
		exclusionActor\?\: ActorGetter;
		exclusionTeamId\?\: string;
		active\?\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6673 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6673)

```typescript
protected getActor({
		variable,
		position,
		area,
		size,
		radius,
		selector,
		teamId,
		condition,
		attribute,
		divisor,
		activation,
		exclusion,
		exclusionActor,
		exclusionTeamId,
		active,
	}: {
		variable: VariableGetter;
		position: PositionGetter;
		area: "circle" | "square";
		size?: number;
		radius?: number;
		selector: "enemy" | "friend" | "team" | "any";
		teamId?: string;
		condition:
			| "nearest"
			| "farthest"
			| "min-attribute-value"
			| "max-attribute-value"
			| "min-attribute-ratio"
			| "max-attribute-ratio"
			| "random";
		attribute?: string;
		divisor?: string;
		activation: "active" | "inactive" | "either";
		exclusion: string;
		exclusionActor?: ActorGetter;
		exclusionTeamId?: string;
		active?: boolean;
	}): CommandFunction {
		// 补丁：2023-1-7
		switch (selector) {
			// @ts-ignore
			case "team-enemy":
				selector = "enemy";
				break;
			// @ts-ignore
			case "team-friend":
				selector = "friend";
				break;
			// @ts-ignore
			case "team-member":
				selector = "team";
				break;
		}
		switch (active) {
			case true:
				activation = "active";
				break;
			case false:
				activation = "either";
				break;
		}
		condition = condition ?? "nearest";
		exclusion = exclusion ?? "none";
		const setActor = Command.compileVariable(variable, Attribute.OBJECT_SET);
		const getPoint = Command.compilePosition(position);
		let getSize: () => number;
		let getRadius: () => number;
		let getTeamId: () => string;
		let getExclusionActor: () => Actor | undefined;
		let getExclusionTeamId: () => string;
		if (teamId) {
			getTeamId = Command.compileString(teamId);
		}
		switch (area) {
			case "square":
				getSize = Command.compileNumber(size!, 0, 0, 512);
				break;
			case "circle":
				getRadius = Command.compileNumber(radius!, 0, 0, 256);
				break;
		}
		switch (exclusion) {
			case "actor":
				getExclusionActor = Command.compileActor(exclusionActor!);
				break;
			case "team":
				getExclusionTeamId = Command.compileString(exclusionTeamId!);
				break;
		}
		if (attribute) attribute = Attribute.getKey(attribute);
		if (divisor) divisor = Attribute.getKey(divisor);
		return () => {
			const point = getPoint();
			if (point) {
				setActor(
					Scene.binding?.getActor({
						x: point.x,
						y: point.y,
						area,
						size: getSize?.(),
						radius: getRadius?.(),
						selector,
						teamId: getTeamId?.(),
						condition,
						attribute: attribute!,
						divisor: divisor!,
						activation,
						exclusionActor: getExclusionActor?.(),
						exclusionTeamId: getExclusionTeamId?.(),
					})
				);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
