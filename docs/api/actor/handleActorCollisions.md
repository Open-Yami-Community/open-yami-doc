---
sidebar_position: 1
title: handleActorCollisions 处理角色与角色之间的碰撞
---

## handleActorCollisions

**类型**: `MethodDeclaration`

**所属类**: `ActorCollider`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

处理角色与角色之间的碰撞

### 返回值

类型: `void`

### 源代码

**位置**: [第 1729 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1729)

```typescript
public static handleActorCollisions(): void {
		if (ActorCollider.actorCollisionEnabled === false) return;
		const { partition } = Scene.actor;
		const { width, height, cells } = partition;
		const { length } = cells;

		// 计算同一个区间的角色碰撞
		for (let i = 0; i < length; i++) {
			const cell = cells[i];
			const length = cell.length;
			for (let si = 0; si < length; si++) {
				const sActor = cell[si];
				if (sActor.collider.weight === 0) continue;
				for (let di = si + 1; di < length; di++) {
					ActorCollider.handleCollisionBetweenTwoActors(sActor, cell[di]);
				}
			}
		}

		// 计算左右区间的角色碰撞
		const ex = width - 1;
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < ex; x++) {
				const i = x + y * width;
				ActorCollider.handleCollisionsBetweenTwoCells(cells[i], cells[i + 1]);
			}
		}

		// 计算上下区间的角色碰撞
		const ey = height - 1;
		for (let x = 0; x < width; x++) {
			for (let y = 0; y < ey; y++) {
				const i = x + y * width;
				ActorCollider.handleCollisionsBetweenTwoCells(
					cells[i],
					cells[i + width]
				);
			}
		}

		// 计算左上到右下区间的角色碰撞
		const lowerRight = width + 1;
		for (let i = 0; i < ex; i++) {
			const end = Math.min(ex - i, ey);
			for (let x = i, y = 0; y < end; x++, y++) {
				const i = x + y * width;
				ActorCollider.handleCollisionsBetweenTwoCells(
					cells[i],
					cells[i + lowerRight]
				);
			}
		}
		for (let i = 1; i < ey; i++) {
			const end = Math.min(ex, ey - i);
			for (let x = 0, y = i; x < end; x++, y++) {
				const i = x + y * width;
				ActorCollider.handleCollisionsBetweenTwoCells(
					cells[i],
					cells[i + lowerRight]
				);
			}
		}

		// 计算右上到左下区间的角色碰撞
		const lowerLeft = width - 1;
		for (let i = ex; i > 0; i--) {
			const end = Math.min(i, ey);
			for (let x = i, y = 0; y < end; x--, y++) {
				const i = x + y * width;
				ActorCollider.handleCollisionsBetweenTwoCells(
					cells[i],
					cells[i + lowerLeft]
				);
			}
		}
		for (let i = 1; i < ey; i++) {
			const end = Math.min(ex + i, ey);
			for (let x = ex, y = i; y < end; x--, y++) {
				const i = x + y * width;
				ActorCollider.handleCollisionsBetweenTwoCells(
					cells[i],
					cells[i + lowerLeft]
				);
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
