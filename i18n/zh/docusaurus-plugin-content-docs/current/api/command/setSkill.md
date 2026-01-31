---
sidebar_position: 1
title: setSkill 设置技能
---

## setSkill

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置技能

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ skill, operation, cooldown, \}` | `\{
		skill\: SkillGetter;
		operation\: "set\-cooldown" \| "increase\-cooldown" \| "decrease\-cooldown";
		cooldown\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7718 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7718)

```typescript
protected setSkill({
		skill,
		operation,
		cooldown,
	}: {
		skill: SkillGetter;
		operation: "set-cooldown" | "increase-cooldown" | "decrease-cooldown";
		cooldown: number | VariableGetter;
	}): CommandFunction {
		const getSkill = Command.compileSkill(skill);
		switch (operation) {
			case "set-cooldown": {
				const getCD = Command.compileNumber(cooldown);
				return () => {
					getSkill()?.setCooldown(getCD());
					return true;
				};
			}
			case "increase-cooldown": {
				const getCD = Command.compileNumber(cooldown);
				return () => {
					getSkill()?.increaseCooldown(getCD());
					return true;
				};
			}
			case "decrease-cooldown": {
				const getCD = Command.compileNumber(cooldown);
				return () => {
					getSkill()?.decreaseCooldown(getCD());
					return true;
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
