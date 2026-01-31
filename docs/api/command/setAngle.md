---
sidebar_position: 1
title: setAngle 设置角度
---

## setAngle

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置角度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, angle, easingId, duration, wait, \}` | `\{
		actor\: ActorGetter;
		angle\: AngleGetter;
		easingId\: string;
		duration\: number \| VariableGetter;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6609 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6609)

```typescript
protected setAngle({
		actor,
		angle,
		easingId,
		duration,
		wait,
	}: {
		actor: ActorGetter;
		angle: AngleGetter;
		easingId: string;
		duration: number | VariableGetter;
		wait: boolean;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		const getAngle = Command.compileAngle(angle);
		const getDuration = Command.compileNumber(duration);
		return () => {
			const actor = getActor();
			if (actor) {
				const radians = getAngle(actor);
				const duration = getDuration();
				actor.setAngle(radians, easingId, duration);
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
