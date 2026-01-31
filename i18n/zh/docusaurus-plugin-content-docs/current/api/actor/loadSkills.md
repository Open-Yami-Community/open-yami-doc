---
sidebar_position: 1
title: loadSkills 加载初始角色技能
---

## loadSkills

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

加载初始角色技能

### 返回值

类型: `void`

### 源代码

**位置**: [第 609 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L609)

```typescript
private loadSkills(): void {
		const { skill: skillManager } = this;
		const dataMap = Data.skills;
		const skills = this.data.skills;
		const length = skills.length;
		// 创建初始技能并设置快捷键
		for (let i = 0; i < length; i++) {
			const skill = skills[i];
			const data = dataMap[skill.id];
			const key = Enum.get(skill.key);
			if (data !== undefined) {
				const skill = new Skill(data);
				skillManager.add(skill);
				if (key && this.shortcut.get(key.value) === undefined) {
					this.shortcut.set(key.value, skill);
				}
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:57
