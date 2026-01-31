---
sidebar_position: 1
title: moveActor 移动角色
---

## moveActor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

移动角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, mode, angle, destination, wait, \}` | `\{
		actor\: ActorGetter;
		mode\: string;
		angle\: number \| VariableGetter;
		destination\: PositionGetter;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6312 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6312)

```typescript
protected moveActor({
		actor,
		mode,
		angle,
		destination,
		wait,
	}: {
		actor: ActorGetter;
		mode: string;
		angle: number | VariableGetter;
		destination: PositionGetter;
		wait: boolean;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		switch (mode) {
			case "stop":
				return () => {
					getActor()?.navigator.stopMoving();
					return true;
				};
			case "keep": {
				const { radians } = Math;
				const getDegrees = Command.compileNumber(angle);
				return () => {
					getActor()?.navigator.moveTowardAngle(radians(getDegrees()));
					return true;
				};
			}
			case "straight": {
				const getPoint = Command.compilePosition(destination);
				return () => {
					const actor = getActor();
					const point = getPoint(actor);
					if (actor && point) {
						actor.navigator.moveTo(point.x, point.y);
						if (wait) {
							const event = CurrentEvent;
							actor.navigator.onFinish(() => {
								event.continue();
							});
							return CurrentEvent.pause();
						}
					}
					return true;
				};
			}
			case "navigate":
			case "navigate-bypass": {
				const getPoint = Command.compilePosition(destination);
				const bypass = mode === "navigate-bypass";
				return () => {
					const actor = getActor();
					const point = getPoint(actor);
					if (Scene.binding !== null && actor && point) {
						actor.navigator.navigateTo(point.x, point.y, bypass);
						if (wait) {
							const event = CurrentEvent;
							actor.navigator.onFinish(() => {
								event.continue();
							});
							return CurrentEvent.pause();
						}
					}
					return true;
				};
			}
			case "teleport": {
				const getPoint = Command.compilePosition(destination);
				return () => {
					const actor = getActor();
					const point = getPoint(actor);
					if (actor && point) {
						actor.setPosition(point.x, point.y);
					}
					return true;
				};
			}
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
