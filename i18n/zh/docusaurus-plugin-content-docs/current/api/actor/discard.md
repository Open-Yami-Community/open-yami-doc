---
sidebar_position: 1
title: discard 放弃远处的目标角色
---

## discard

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

放弃远处的目标角色

参数 `selector`: 目标角色选择器

参数 `distance`: 如果与目标角色的距离达到这个阈值，将他从目标列表中移除

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `selector` | `ActorSelector` | - | - |
| `distance` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5446 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5446)

```typescript
public discard(selector: ActorSelector, distance: number = 0): void {
		const inspector = Actor.inspectors[selector];
		const owner = this.actor;
		const ox = owner.x;
		const oy = owner.y;
		const square = distance ** 2;
		const targets = this.targets;
		let i = targets.length;
		// 逆序查找目标列表中的所有角色
		while (--i >= 0) {
			const actor = targets[i];
			// 如果角色符合条件，且距离大于等于放弃距离，则把该角色从目标列表中移除
			if (
				inspector(owner, actor) &&
				(ox - actor.x) ** 2 + (oy - actor.y) ** 2 >= square
			) {
				this.remove(actor);
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
