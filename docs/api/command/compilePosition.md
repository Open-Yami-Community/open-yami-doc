---
sidebar_position: 1
title: compilePosition 编译场景位置对象
---

## compilePosition

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译场景位置对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `position` | `PositionGetter` | - | - |

### 返回值

类型: `(reference\?\: any) =&gt; Point \| undefined`

### 源代码

**位置**: [第 641 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L641)

```typescript
public compilePosition(
		position: PositionGetter
	): (reference?: any) => Point | undefined {
		switch (position.type) {
			case "absolute": {
				const getX = Command.compileNumber(position.x);
				const getY = Command.compileNumber(position.y);
				return () => {
					return {
						x: getX(),
						y: getY(),
					};
				};
			}
			case "relative": {
				const getX = Command.compileNumber(position.x);
				const getY = Command.compileNumber(position.y);
				return reference => {
					if (reference) {
						return {
							x: reference.x + getX(),
							y: reference.y + getY(),
						};
					}
				};
			}
			case "actor":
				return Command.compileActor(position.actor);
			case "trigger":
				return Command.compileTrigger(position.trigger);
			case "light":
				return Command.compileLight(position.light);
			case "region": {
				const getRegion = Command.compileRegion(position.region);
				switch (position.mode) {
					case "center":
						return getRegion;
					case "random":
						return () => getRegion()?.getRandomPosition();
					case "random-land":
						return () => getRegion()?.getRandomPosition(0);
					case "random-water":
						return () => getRegion()?.getRandomPosition(1);
					case "random-wall":
						return () => getRegion()?.getRandomPosition(2);
				}
			}
			case "object": {
				const objectId = (position as any).objectId;
				return () => Scene.entity.get(objectId) as Point | undefined;
			}
			case "mouse":
				return () => {
					return {
						x: Mouse.sceneX,
						y: Mouse.sceneY,
					};
				};
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
