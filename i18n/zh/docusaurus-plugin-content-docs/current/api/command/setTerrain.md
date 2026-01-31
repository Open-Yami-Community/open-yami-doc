---
sidebar_position: 1
title: setTerrain 设置地形
---

## setTerrain

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置地形

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ position, terrain, \}` | `\{
		position\: PositionGetter;
		terrain\: "land" \| "water" \| "wall";
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8514 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8514)

```typescript
protected setTerrain({
		position,
		terrain,
	}: {
		position: PositionGetter;
		terrain: "land" | "water" | "wall";
	}): CommandFunction {
		const getPoint = Command.compilePosition(position);
		let code: TerrainCode;
		switch (terrain) {
			case "land":
				code = 0;
				break;
			case "water":
				code = 1;
				break;
			case "wall":
				code = 2;
				break;
		}
		return () => {
			const scene = Scene.binding;
			const point = getPoint();
			if (scene !== null && point) {
				const x = Math.floor(point.x);
				const y = Math.floor(point.y);
				scene.terrain.set(x, y, code);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
