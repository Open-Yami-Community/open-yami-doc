---
sidebar_position: 1
title: decreaseCooldown 减少冷却时间
---

## decreaseCooldown

**类型**: `MethodDeclaration`

**所属类**: `CooldownManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

减少冷却时间

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

**位置**: [第 5254 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5254)

```typescript
public decreaseCooldown(key: string, cooldown: number): void {
		const item = this.keyMap[key];
		if (item && cooldown > 0) {
			item.cooldown -= cooldown;
			// 如果冷却结束，删除键
			if (item.cooldown <= 0) {
				this.delete(key);
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
