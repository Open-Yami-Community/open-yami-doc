---
sidebar_position: 1
title: set 设置快捷栏的快捷项
---

## set

**类型**: `MethodDeclaration`

**所属类**: `ShortcutManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置快捷栏的快捷项

参数 `key`: 快捷键

@param 物品或技能实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |
| `target` | `Item \| Skill` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5017 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5017)

```typescript
public set(key: string, target: Item | Skill): void {
		if (!key) return;
		if (target instanceof Skill) {
			this.keyMap[key] = new Shortcut("skill", key, target.id, target.data);
			this.version++;
			return;
		}
		if (target instanceof Item) {
			this.keyMap[key] = new Shortcut("item", key, target.id, target.data);
			this.version++;
			return;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
