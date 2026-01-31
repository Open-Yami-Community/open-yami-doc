---
sidebar_position: 1
title: getTarget 获取快捷栏的目标对象(物品或技能)
---

## getTarget

**类型**: `MethodDeclaration`

**所属类**: `ShortcutManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

获取快捷栏的目标对象(物品或技能)

参数 `key`: 快捷键

返回值:物品或技能实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `Skill \| Item \| undefined`

物品或技能实例

### 源代码

**位置**: [第 5000 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5000)

```typescript
public getTarget(key: string): Skill | Item | undefined {
		const shortcut = this.keyMap[key];
		switch (shortcut?.type) {
			case "skill":
				return this.actor.skill.get(shortcut.id);
			case "item":
				return this.actor.inventory.get(shortcut.id) as Item;
			default:
				return undefined;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
