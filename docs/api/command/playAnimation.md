---
sidebar_position: 1
title: playAnimation 播放动画
---

## playAnimation

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

播放动画

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ mode, position, actor, animationId, motion, rotatable, priority, offsetY, angle, speed, wait, \}` | `\{
		mode\: string;
		position\?\: PositionGetter;
		actor\?\: ActorGetter;
		animationId\: string;
		motion\: string;
		rotatable\: boolean;
		priority\: number;
		offsetY\: number \| VariableGetter;
		angle\: number \| VariableGetter;
		speed\: number \| VariableGetter;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 5860 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5860)

```typescript
protected playAnimation({
		mode,
		position,
		actor,
		animationId,
		motion,
		rotatable,
		priority,
		offsetY,
		angle,
		speed,
		wait,
	}: {
		mode: string;
		position?: PositionGetter;
		actor?: ActorGetter;
		animationId: string;
		motion: string;
		rotatable: boolean;
		priority: number;
		offsetY: number | VariableGetter;
		angle: number | VariableGetter;
		speed: number | VariableGetter;
		wait: boolean;
	}): CommandFunction | null {
		let getPoint: () => Point | undefined;
		switch (mode) {
			case "position":
				getPoint = Command.compilePosition(position!);
				break;
			case "actor":
				getPoint = Command.compileActor(actor!);
				break;
		}
		const getOffsetY = Command.compileNumber(offsetY, 0);
		const getAngle = Command.compileNumber(angle);
		const getSpeed = Command.compileNumber(speed, 1, 0.1, 10);
		const data = Data.animations[animationId];
		const motionName = Enum.getValue(motion);
		return !data
			? null
			: () => {
					const point = getPoint();
					if (point) {
						const animation = new SceneAnimation(data);
						if (mode === "position") {
							animation.setPosition({ x: point.x, y: point.y });
						} else {
							animation.setPosition(point);
						}
						if (animation.setMotion(motionName)) {
							animation.rotatable = rotatable;
							animation.priority = priority;
							animation.offsetY = getOffsetY();
							animation.speed = getSpeed();
							animation.setAngle(Math.radians(getAngle()));
							animation.onFinish(() => {
								animation.destroy();
								Callback.push(() => {
									Scene.animation.remove(animation);
								});
							});
							Scene.animation.append(animation);
							if (wait) {
								const event = CurrentEvent;
								animation.onFinish(() => {
									event.continue();
								});
								return CurrentEvent.pause();
							}
						}
					}
					return true;
			  };
	}
```

---



文档生成时间：2026/1/31 13:13:58
