---
sidebar_position: 1
title: getTargetNearest 获取目标角色 - 最近距离
---

## getTargetNearest

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

获取目标角色 - 最近距离

参数 `selector`: 目标角色选择器

返回值:目标池中符合条件的角色实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `selector` | `ActorSelector` | - | - |

### 返回值

类型: `Actor \| undefined`

目标池中符合条件的角色实例

### 源代码

**位置**: [第 5574 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5574)

```typescript
public getTargetNearest(selector: ActorSelector): Actor | undefined {
		let target: Actor | undefined;
		let weight = Infinity;
		const inspector = Actor.inspectors[selector];
		const owner = this.actor;
		const targets = this.targets;
		const length = targets.length;
		for (let i = 0; i < length; i++) {
			const actor = targets[i];
			// 检查角色关系，并找出最近距离的目标
			if (inspector(owner, actor)) {
				const distance = Math.dist(owner.x, owner.y, actor.x, actor.y);
				if (distance < weight) {
					target = actor;
					weight = distance;
				}
			}
		}
		return target;
	}
```

---



文档生成时间：2026/1/31 13:13:58
