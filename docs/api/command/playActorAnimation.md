---
sidebar_position: 1
title: playActorAnimation 播放角色动画
---

## playActorAnimation

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

播放角色动画

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, motion, speed, wait, \}` | `\{
		actor\: ActorGetter;
		motion\: string;
		speed\: number \| VariableGetter;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7195 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7195)

```typescript
protected playActorAnimation({
		actor,
		motion,
		speed,
		wait,
	}: {
		actor: ActorGetter;
		motion: string;
		speed: number | VariableGetter;
		wait: boolean;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		const getSpeed = Command.compileNumber(speed, 1, 0.1, 10);
		const motionName = Enum.getValue(motion);
		return () => {
			const actor = getActor();
			if (actor) {
				const animation = actor.animationController.playMotion(
					motionName,
					getSpeed()
				);
				if (wait && animation) {
					const event = CurrentEvent;
					animation.onFinish(() => {
						event.continue();
					});
					return CurrentEvent.pause();
				}
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
