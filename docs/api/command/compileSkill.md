---
sidebar_position: 1
title: compileSkill 编译技能对象
---

## compileSkill

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译技能对象

参数 `skill`: 技能访问器

返回值:技能访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `skill` | `SkillGetter` | - | - |

### 返回值

类型: `() =&gt; Skill \| undefined`

技能访问器函数

### 源代码

**位置**: [第 538 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L538)

```typescript
public compileSkill(skill: SkillGetter): () => Skill | undefined {
		switch (skill.type) {
			case "trigger":
				return () => CurrentEvent.triggerSkill;
			case "latest":
				return () => Skill.latest;
			case "by-key": {
				const getActor = Command.compileActor(skill.actor);
				const getShortcutKey = Command.compileEnumValue(skill.key);
				return () => getActor()?.shortcut.getSkill(getShortcutKey());
			}
			case "by-id": {
				const getActor = Command.compileActor(skill.actor);
				return () => getActor()?.skill.get(skill.skillId);
			}
			case "variable":
				return Command.compileVariable(skill.variable, Attribute.SKILL_GET);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
