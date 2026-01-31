---
sidebar_position: 1
title: increaseCooldown 增加冷却时间
---

## increaseCooldown

**类型**: `MethodDeclaration`

**所属类**: `CooldownManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

增加冷却时间

参数 `key`: 冷却键

参数 `cooldown`: 冷却时间

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |
| `cooldown` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5241 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5241)

```typescript
public increaseCooldown(key: string, cooldown: number): void {
		if (key && cooldown > 0) {
			const item = this.create(key);
			item.cooldown += cooldown;
			item.duration = Math.max(item.cooldown, item.duration);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
