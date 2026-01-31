---
sidebar_position: 1
title: changeActorSkill 改变角色技能
---

## changeActorSkill

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

改变角色技能

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, operation, skillId, skill, \}` | `\{
		actor\: ActorGetter;
		operation\: "add" \| "remove" \| "remove\-instance" \| "sort\-by\-order";
		skillId\?\: string \| VariableGetter;
		skill\?\: SkillGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7057 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7057)

```typescript
protected changeActorSkill({
		actor,
		operation,
		skillId,
		skill,
	}: {
		actor: ActorGetter;
		operation: "add" | "remove" | "remove-instance" | "sort-by-order";
		skillId?: string | VariableGetter;
		skill?: SkillGetter;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		switch (operation) {
			case "add": {
				const getSkillId = Command.compileString(skillId!);
				return () => {
					const manager = getActor()?.skill;
					const skillId = getSkillId();
					const data = Data.skills[skillId];
					if (manager && data && !manager.get(skillId)) {
						manager.add(new Skill(data));
					}
					return true;
				};
			}
			case "remove": {
				const getSkillId = Command.compileString(skillId!);
				return () => {
					getActor()?.skill.delete(getSkillId());
					return true;
				};
			}
			case "remove-instance": {
				const getSkill = Command.compileSkill(skill!);
				return () => {
					const skill = getSkill();
					if (skill) {
						getActor()?.skill.remove(skill);
					}
					return true;
				};
			}
			case "sort-by-order":
				return () => {
					getActor()?.skill.sort();
					return true;
				};
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
