---
sidebar_position: 1
title: castSkill 施放技能
---

## castSkill

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

施放技能

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, mode, key, skillId, skill, wait, \}` | `\{
		actor\: ActorGetter;
		mode\: string;
		key\?\: string;
		skillId\?\: string;
		skill\?\: SkillGetter;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7658 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7658)

```typescript
protected castSkill({
		actor,
		mode,
		key,
		skillId,
		skill,
		wait,
	}: {
		actor: ActorGetter;
		mode: string;
		key?: string;
		skillId?: string;
		skill?: SkillGetter;
		wait: boolean;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		let getSkill: () => Skill | undefined;
		switch (mode) {
			case "by-key": {
				const shortcutKey = Enum.getValue(key!);
				getSkill = () => getActor()?.shortcut.getSkill(shortcutKey);
				break;
			}
			case "by-id":
				getSkill = () => getActor()?.skill.get(skillId!);
				break;
			case "by-skill": {
				const getInstance = Command.compileSkill(skill!);
				getSkill = () => {
					const actor = getActor();
					const skill = getInstance();
					if (actor && skill && actor.skill === skill.parent) {
						return skill;
					}
				};
				break;
			}
		}
		switch (wait) {
			case false:
				return () => {
					getSkill()?.cast(CurrentEvent.targetActor);
					return true;
				};
			case true:
				return () => {
					const casting = getSkill()?.cast(CurrentEvent.targetActor);
					if (casting && !casting.complete) {
						const event = CurrentEvent;
						casting.onFinish(() => {
							event.continue();
						});
						return CurrentEvent.pause();
					}
					return true;
				};
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
