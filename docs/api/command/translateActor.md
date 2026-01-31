---
sidebar_position: 1
title: translateActor 平移角色
---

## translateActor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

平移角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, angle, distance, easingId, duration, wait, \}` | `\{
		actor\: ActorGetter;
		angle\: AngleGetter;
		distance\: number \| VariableGetter;
		easingId\: string;
		duration\: number \| VariableGetter;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6484 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6484)

```typescript
protected translateActor({
		actor,
		angle,
		distance,
		easingId,
		duration,
		wait,
	}: {
		actor: ActorGetter;
		angle: AngleGetter;
		distance: number | VariableGetter;
		easingId: string;
		duration: number | VariableGetter;
		wait: boolean;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		const getAngle = Command.compileAngle(angle);
		const getDistance = Command.compileNumber(distance);
		const getDuration = Command.compileNumber(duration);
		return () => {
			const actor = getActor();
			if (actor) {
				const radians = getAngle(actor);
				const distance = getDistance();
				const duration = getDuration();
				actor.translate(radians, distance, easingId, duration);
				if (wait && duration > 0) {
					return CurrentEvent.wait(duration);
				}
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
