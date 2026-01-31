---
sidebar_position: 1
title: moveCamera 移动摄像机
---

## moveCamera

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

移动摄像机

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ mode, position, actor, easingId, duration, wait, \}` | `\{
		mode\: "position" \| "actor";
		position\?\: PositionGetter;
		actor\?\: ActorGetter;
		easingId\: string;
		duration\: number;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8305 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8305)

```typescript
protected moveCamera({
		mode,
		position,
		actor,
		easingId,
		duration,
		wait,
	}: {
		mode: "position" | "actor";
		position?: PositionGetter;
		actor?: ActorGetter;
		easingId: string;
		duration: number;
		wait: boolean;
	}): CommandFunction {
		switch (mode) {
			case "position": {
				const getPoint = Command.compilePosition(position!);
				return () => {
					if (Scene.binding !== null) {
						const point = getPoint(Camera);
						if (point) {
							Camera.moveTo(point.x, point.y, easingId, duration);
							if (wait && duration > 0) {
								return CurrentEvent.wait(duration);
							}
						}
					}
					return true;
				};
			}
			case "actor": {
				const getActor = Command.compileActor(actor!);
				return () => {
					if (Scene.binding !== null) {
						const actor = getActor();
						if (actor && !actor.destroyed) {
							Camera.follow(actor, easingId, duration);
							if (wait && duration > 0) {
								return CurrentEvent.wait(duration);
							}
						}
					}
					return true;
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
