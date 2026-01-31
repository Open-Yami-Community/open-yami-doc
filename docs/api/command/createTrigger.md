---
sidebar_position: 1
title: createTrigger 创建触发器
---

## createTrigger

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

创建触发器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ triggerId, caster, origin, angle, distance, scale, timeScale, \}` | `\{
		triggerId\: string;
		caster\: ActorGetter;
		origin\: PositionGetter;
		angle\: AngleGetter;
		distance\: number \| VariableGetter;
		scale\: number \| VariableGetter;
		timeScale\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7754 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7754)

```typescript
protected createTrigger({
		triggerId,
		caster,
		origin,
		angle,
		distance,
		scale,
		timeScale,
	}: {
		triggerId: string;
		caster: ActorGetter;
		origin: PositionGetter;
		angle: AngleGetter;
		distance: number | VariableGetter;
		scale: number | VariableGetter;
		timeScale: number | VariableGetter;
	}): CommandFunction {
		const getTriggerId = Command.compileString(triggerId);
		const getCaster = Command.compileActor(caster);
		const getOrigin = Command.compilePosition(origin);
		const getAngle = Command.compileAngle(angle);
		const getDistance = Command.compileNumber(distance);
		const getScale = Command.compileNumber(scale, 1, 0.1, 10);
		const getTimeScale = Command.compileNumber(timeScale, 1, 0.1, 10);
		return () => {
			const data = Data.triggers[getTriggerId()];
			const caster = getCaster();
			const origin = getOrigin();
			if (data && caster && origin) {
				const angle = getAngle(origin);
				const cos = Math.cos(angle);
				const sin = Math.sin(angle);
				const trigger = new Trigger(data);
				const distance = getDistance();
				const x = origin.x + distance * cos;
				const y = origin.y + distance * sin;
				trigger.angle = angle;
				trigger.caster = caster;
				trigger.target = CurrentEvent.targetActor ?? null;
				trigger.skill = CurrentEvent.triggerSkill ?? null;
				trigger.timeScale = getTimeScale();
				trigger.setScale(getScale());
				trigger.setPosition(x, y);
				trigger.updateVelocity();
				// 如果在低优先级事件中创建触发器
				// 有必要立即更新动作方向
				trigger.updateAnimation(0);
				Scene.trigger.append(trigger);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
