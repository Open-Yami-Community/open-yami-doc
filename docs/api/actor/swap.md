---
sidebar_position: 1
title: swap 交换快捷栏项目
---

## swap

**类型**: `MethodDeclaration`

**所属类**: `ShortcutManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

交换快捷栏项目

参数 `sKey`: 源快捷键

参数 `dKey`: 目标快捷键

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `sKey` | `string` | - | - |
| `dKey` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5065 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5065)

```typescript
public swap(sKey: string, dKey: string): void {
		if (sKey !== dKey && sKey && dKey) {
			const map = this.keyMap;
			const sItem = map[sKey];
			const dItem = map[dKey];
			if (sItem) {
				sItem.key = dKey;
				map[dKey] = sItem;
			} else {
				delete map[dKey];
			}
			if (dItem) {
				dItem.key = sKey;
				map[sKey] = dItem;
			} else {
				delete map[sKey];
			}
			this.version++;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
