---
sidebar_position: 1
title: setObjectAnimation 设置对象动画
---

## setObjectAnimation

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置对象动画

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ sort, object, operation, tint, opacity, offsetY, rotation, easingId, duration, wait, \}` | `\{
		sort\: "actor" \| "components" \| "trigger" \| "animation";
		object\: ActorGetter \| TriggerGetter \| ObjectGetter;
		operation\:
			\| "set\-tint"
			\| "set\-rgb"
			\| "set\-gray"
			\| "set\-opacity"
			\| "set\-offsetY"
			\| "set\-rotation";
		tint\?\: ImageTint;
		opacity\?\: number \| VariableGetter;
		offsetY\?\: number \| VariableGetter;
		rotation\: number \| VariableGetter;
		easingId\: string;
		duration\: number;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 5937 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5937)

```typescript
protected setObjectAnimation({
		sort,
		object,
		operation,
		tint,
		opacity,
		offsetY,
		rotation,
		easingId,
		duration,
		wait,
	}: {
		sort: "actor" | "components" | "trigger" | "animation";
		object: ActorGetter | TriggerGetter | ObjectGetter;
		operation:
			| "set-tint"
			| "set-rgb"
			| "set-gray"
			| "set-opacity"
			| "set-offsetY"
			| "set-rotation";
		tint?: ImageTint;
		opacity?: number | VariableGetter;
		offsetY?: number | VariableGetter;
		rotation: number | VariableGetter;
		easingId: string;
		duration: number;
		wait: boolean;
	}): CommandFunction {
		let tintProps: HashMap<number>;
		let getOpacity: () => number;
		let getOffsetY: () => number;
		let getRotation: () => number;
		switch (operation) {
			case "set-tint":
				tintProps = {
					red: tint![0],
					green: tint![1],
					blue: tint![2],
					gray: tint![3],
				};
				break;
			case "set-rgb":
				tintProps = {
					red: tint![0],
					green: tint![1],
					blue: tint![2],
				};
				break;
			case "set-gray":
				tintProps = {
					gray: tint![3],
				};
				break;
			case "set-opacity":
				getOpacity = Command.compileNumber(opacity!, 1, 0, 1);
				break;
			case "set-offsetY":
				getOffsetY = Command.compileNumber(offsetY!, 0, -10000, 10000);
				break;
			case "set-rotation": {
				const getDegrees = Command.compileNumber(rotation!, 0, -10000, 10000);
				getRotation = () => Math.radians(getDegrees());
				break;
			}
		}
		switch (sort) {
			case "actor": {
				const getActor = Command.compileActor(object as ActorGetter);
				return () => {
					const actor = getActor();
					if (actor) {
						if (tintProps) {
							actor.setTint(tintProps, easingId, duration);
						} else if (getOpacity) {
							actor.setOpacity(getOpacity(), easingId, duration);
						} else if (getOffsetY) {
							actor.setOffsetY(getOffsetY(), easingId, duration);
						} else if (getRotation) {
							actor.setRotation(getRotation(), easingId, duration);
						}
						if (wait && duration > 0) {
							return CurrentEvent.wait(duration);
						}
					}
					return true;
				};
			}
			case "components": {
				const getActor = Command.compileActor(object as ActorGetter);
				return () => {
					const actor = getActor();
					if (actor) {
						if (tintProps) {
							actor.setTintForAll(tintProps, easingId, duration);
						} else if (getOpacity) {
							actor.setOpacityForAll(getOpacity(), easingId, duration);
						} else if (getOffsetY) {
							actor.setOffsetYForAll(getOffsetY(), easingId, duration);
						} else if (getRotation) {
							actor.setRotationForAll(getRotation(), easingId, duration);
						}
						if (wait && duration > 0) {
							return CurrentEvent.wait(duration);
						}
					}
					return true;
				};
			}
			case "trigger": {
				const getTrigger = Command.compileTrigger(object as TriggerGetter);
				return () => {
					const trigger = getTrigger();
					if (trigger) {
						if (tintProps) {
							trigger.setTint(tintProps, easingId, duration);
						} else if (getOpacity) {
							trigger.setOpacity(getOpacity(), easingId, duration);
						} else if (getOffsetY) {
							trigger.setOffsetY(getOffsetY(), easingId, duration);
						} else if (getRotation) {
							trigger.setRotation(getRotation(), easingId, duration);
						}
						if (wait && duration > 0) {
							return CurrentEvent.wait(duration);
						}
					}
					return true;
				};
			}
			case "animation": {
				const getObject = Command.compileObject(object as ObjectGetter);
				return () => {
					const animation = getObject();
					if (animation instanceof SceneAnimation) {
						const updaters = animation.updaters;
						if (tintProps) {
							animation.setTint(
								"command-set-tint",
								updaters,
								tintProps,
								easingId,
								duration
							);
						} else if (getOpacity) {
							animation.setOpacity(
								"command-set-opacity",
								updaters,
								getOpacity(),
								easingId,
								duration
							);
						} else if (getOffsetY) {
							animation.setOffsetY(
								"command-set-offsetY",
								updaters,
								getOffsetY(),
								easingId,
								duration
							);
						} else if (getRotation) {
							animation.setRotation(
								"command-set-rotation",
								updaters,
								getRotation(),
								easingId,
								duration
							);
						}
						if (wait && duration > 0) {
							return CurrentEvent.wait(duration);
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
