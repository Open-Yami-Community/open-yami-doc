---
sidebar_position: 1
title: handleSceneCollisions 处理角色与场景之间的碰撞
---

## handleSceneCollisions

**类型**: `MethodDeclaration`

**所属类**: `ActorCollider`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

处理角色与场景之间的碰撞

### 返回值

类型: `void`

### 源代码

**位置**: [第 1597 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1597)

```typescript
public static handleSceneCollisions(): void {
		if (ActorCollider.sceneCollisionEnabled === false) return;
		const scene = Scene.binding!;
		const radius = ActorCollider.sceneCollisionRadius;
		const radiusSquared = radius ** 2;
		const terrains = scene.terrain.compositeArray;
		const width = scene.width;
		const height = scene.height;
		if (width * height === 0) return;
		const right = width - 1;
		const bottom = height - 1;
		const actors = scene.actor.list;
		const length = actors.length;
		// 遍历场景角色，计算碰撞
		for (let i = 0; i < length; i++) {
			const actor = actors[i];
			const collider = actor.collider;
			// 如果角色未移动，跳过
			if (collider.moved === false) {
				continue;
			}
			// 如果角色在场景网格之外，跳过
			if (actor.x < radius) actor.x = radius;
			if (actor.y < radius) actor.y = radius;
			if (actor.x > width - radius) actor.x = width - radius;
			if (actor.y > height - radius) actor.y = height - radius;
			const passage = actor.passage;
			if (passage === -1) continue;
			const sx = Math.clamp(actor.intX, 0, right);
			const sy = Math.clamp(actor.intY, 0, bottom);
			let dx = Math.floor(actor.x);
			let dy = Math.floor(actor.y);
			// 如果角色锚点穿过了水平网格
			if (sx !== dx) {
				const unitY = (dy - sy) / (dx - sx);
				const step = sx < dx ? 1 : -1;
				let x = sx;
				do {
					x += step;
					const y = Math.floor(sy + (x - sx) * unitY);
					if (terrains[x + y * width] !== passage) {
						actor.x = sx < dx ? x - radius : x + 1 + radius;
						dx = Math.floor(actor.x);
						break;
					}
				} while (x !== dx);
			}
			// 如果角色锚点穿过了垂直网格
			if (sy !== dy) {
				const unitX = (dx - sx) / (dy - sy);
				const step = sy < dy ? 1 : -1;
				let y = sy;
				do {
					y += step;
					const x = Math.floor(sx + (y - sy) * unitX);
					if (terrains[x + y * width] !== passage) {
						actor.y = sy < dy ? y - radius : y + 1 + radius;
						dy = Math.floor(actor.y);
						break;
					}
				} while (y !== dy);
			}
			const ax = actor.x;
			const ay = actor.y;
			const al = Math.floor(ax - radius);
			const at = Math.floor(ay - radius);
			const ar = Math.ceil(ax + radius);
			const ab = Math.ceil(ay + radius);
			const x = Math.round(ax);
			const y = Math.round(ay);
			let ox = 0;
			let oy = 0;
			// 如果角色跨越了水平网格
			if (al + 1 !== ar) {
				if (x === dx) {
					// 如果角色锚点在网格中靠左的位置
					if (terrains[al + dy * width] !== passage) {
						// 如果左边是不能通行的区域，让角色贴墙
						actor.x = x + radius;
					} else {
						ox = -1;
					}
				} else {
					// 如果角色锚点在网格中靠右的位置
					if (terrains[x + dy * width] !== passage) {
						// 如果右边是不能通行的区域，让角色贴墙
						actor.x = x - radius;
					} else {
						ox = 1;
					}
				}
			}
			// 如果角色跨越了垂直网格
			if (at + 1 !== ab) {
				if (y === dy) {
					// 如果角色锚点在网格中靠上的位置
					if (terrains[dx + at * width] !== passage) {
						// 如果上边是不能通行的区域，让角色贴墙
						actor.y = y + radius;
					} else {
						oy = -1;
					}
				} else {
					// 如果角色锚点在网格中靠下的位置
					if (terrains[dx + y * width] !== passage) {
						// 如果下边是不能通行的区域，让角色贴墙
						actor.y = y - radius;
					} else {
						oy = 1;
					}
				}
			}
			// 如果角色跨越了场景网格，但是未发生碰撞
			// 则判断地形的一角是否与角色发生碰撞
			if (
				ox !== 0 &&
				oy !== 0 &&
				terrains[dx + ox + (dy + oy) * width] !== passage
			) {
				// 如果离角色最近的网格角不可通行，且距离小于碰撞半径，则判定为碰撞
				const distSquared = (x - ax) ** 2 + (y - ay) ** 2;
				if (distSquared >= radiusSquared) continue;
				// 计算最小移动向量，把角色推离到碰撞边缘
				const hypot = radius - Math.sqrt(distSquared);
				const angle = Math.atan2(ay - y, ax - x);
				actor.x += hypot * Math.cos(angle);
				actor.y += hypot * Math.sin(angle);
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
