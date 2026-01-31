---
sidebar_position: 1
title: detect 探测目标角色，将符合条件的角色添加到目标列表中
---

## detect

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

探测目标角色，将符合条件的角色添加到目标列表中

参数 `distance`: 探测距离(单位:图块)

参数 `selector`: 目标角色选择器

参数 `inSight`: 是否判断目标角色在视野中可见

返回值:是否已经存在目标

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `distance` | `number` | - | - |
| `selector` | `ActorSelector` | - | - |
| `inSight` | `boolean` | - | false |

### 返回值

类型: `boolean`

是否已经存在目标

### 源代码

**位置**: [第 5401 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5401)

```typescript
public detect(
		distance: number,
		selector: ActorSelector,
		inSight: boolean = false
	): boolean {
		const inspector = Actor.inspectors[selector];
		const owner = this.actor;
		const ox = owner.x;
		const oy = owner.y;
		// 获取探测范围所在的角色区间列表
		const cells = Scene.actor.partition.get(
			ox - distance,
			oy - distance,
			ox + distance,
			oy + distance
		);
		const square = distance ** 2;
		const count = cells.count;
		// 查找所有角色区间
		for (let i = 0; i < count; i++) {
			const actors = cells[i]!;
			const length = actors.length;
			// 查找区间中的所有角色
			for (let i = 0; i < length; i++) {
				const actor = actors[i] as Actor;
				// 如果角色已激活，距离小于等于探测距离，且符合条件，则把该角色添加到目标列表中
				if (
					actor.active &&
					(ox - actor.x) ** 2 + (oy - actor.y) ** 2 <= square &&
					inspector(owner, actor) &&
					(inSight === false ||
						actor.parent!.scene.isInLineOfSight(ox, oy, actor.x, actor.y))
				) {
					this.append(actor);
				}
			}
		}
		return this.exists();
	}
```

---



文档生成时间：2026/1/31 13:13:58
