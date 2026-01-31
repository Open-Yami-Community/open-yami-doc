---
sidebar_position: 1
title: getMultipleActors 获取多个角色
---

## getMultipleActors

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

获取多个角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ variable, position, area, width, height, radius, selector, teamId, activation, \}` | `\{
		variable\: VariableGetter;
		position\: PositionGetter;
		area\: "rectangle" \| "circle";
		width\?\: number;
		height\?\: number;
		radius\?\: number;
		selector\: "enemy" \| "friend" \| "team" \| "any";
		teamId\?\: string;
		activation\: "active" \| "inactive" \| "either";
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6792 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6792)

```typescript
protected getMultipleActors({
		variable,
		position,
		area,
		width,
		height,
		radius,
		selector,
		teamId,
		activation,
	}: {
		variable: VariableGetter;
		position: PositionGetter;
		area: "rectangle" | "circle";
		width?: number;
		height?: number;
		radius?: number;
		selector: "enemy" | "friend" | "team" | "any";
		teamId?: string;
		activation: "active" | "inactive" | "either";
	}): CommandFunction {
		const setActor = Command.compileVariable(variable, Attribute.OBJECT_SET);
		const getPoint = Command.compilePosition(position);
		let getWidth: () => number;
		let getHeight: () => number;
		let getRadius: () => number;
		let getTeamId: () => string;
		if (teamId) {
			getTeamId = Command.compileString(teamId);
		}
		switch (area) {
			case "rectangle":
				getWidth = Command.compileNumber(width!, 0, 0, 512);
				getHeight = Command.compileNumber(height!, 0, 0, 512);
				break;
			case "circle":
				getRadius = Command.compileNumber(radius!, 0, 0, 256);
				break;
		}
		return () => {
			const point = getPoint();
			if (point) {
				setActor(
					Scene.binding?.getMultipleActors({
						x: point.x,
						y: point.y,
						area,
						width: getWidth?.(),
						height: getHeight?.(),
						radius: getRadius?.(),
						selector,
						teamId: getTeamId?.(),
						activation,
					})
				);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
