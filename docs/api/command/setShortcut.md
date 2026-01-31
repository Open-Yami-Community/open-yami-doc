---
sidebar_position: 1
title: setShortcut 设置快捷键
---

## setShortcut

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置快捷键

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, operation, key, key2, itemId, skillId, \}` | `\{
		actor\: ActorGetter;
		operation\:
			\| "set\-item\-shortcut"
			\| "set\-skill\-shortcut"
			\| "delete\-shortcut"
			\| "swap\-shortcuts";
		key\: string;
		key2\?\: string;
		itemId\?\: string;
		skillId\?\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8134 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8134)

```typescript
protected setShortcut({
		actor,
		operation,
		key,
		key2,
		itemId,
		skillId,
	}: {
		actor: ActorGetter;
		operation:
			| "set-item-shortcut"
			| "set-skill-shortcut"
			| "delete-shortcut"
			| "swap-shortcuts";
		key: string;
		key2?: string;
		itemId?: string;
		skillId?: string;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		const getShortcutKey = Command.compileEnumValue(key);
		switch (operation) {
			case "set-item-shortcut": {
				const getItemId = Command.compileString(itemId!);
				return () => {
					getActor()?.shortcut.setId(getShortcutKey(), getItemId());
					return true;
				};
			}
			case "set-skill-shortcut": {
				const getSkillId = Command.compileString(skillId!);
				return () => {
					getActor()?.shortcut.setId(getShortcutKey(), getSkillId());
					return true;
				};
			}
			case "delete-shortcut":
				return () => {
					getActor()?.shortcut.delete(getShortcutKey());
					return true;
				};
			case "swap-shortcuts": {
				const getShortcutKey2 = Command.compileEnumValue(key2!);
				return () => {
					getActor()?.shortcut.swap(getShortcutKey(), getShortcutKey2());
					return true;
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
