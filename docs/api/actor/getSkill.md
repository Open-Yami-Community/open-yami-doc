---
sidebar_position: 1
title: getSkill 获取快捷栏的技能
---

## getSkill

**类型**: `MethodDeclaration`

**所属类**: `ShortcutManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

获取快捷栏的技能

参数 `key`: 快捷键

返回值:技能实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `Skill \| undefined`

技能实例

### 源代码

**位置**: [第 4987 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4987)

```typescript
public getSkill(key: string): Skill | undefined {
		const shortcut = this.keyMap[key];
		if (shortcut?.type === "skill") {
			return this.actor.skill.get(shortcut.id);
		}
		return undefined;
	}
```

---



文档生成时间：2026/1/31 13:13:58
