---
sidebar_position: 1
title: setId 设置快捷栏项目(文件ID)
---

## setId

**类型**: `MethodDeclaration`

**所属类**: `ShortcutManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置快捷栏项目(文件ID)

参数 `key`: 快捷键

参数 `id`: 物品或技能的文件ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |
| `id` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5036 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5036)

```typescript
public setId(key: string, id: string): void {
		if (id in Data.skills) {
			this.keyMap[key] = new Shortcut("skill", key, id, Data.skills[id]!);
			this.version++;
			return;
		}
		if (id in Data.items) {
			this.keyMap[key] = new Shortcut("item", key, id, Data.items[id]!);
			this.version++;
			return;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
