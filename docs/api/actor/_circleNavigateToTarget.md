---
sidebar_position: 1
title: _circleNavigateToTarget 圆形模式 - 导航到目标角色
---

## _circleNavigateToTarget

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

圆形模式 - 导航到目标角色

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2588 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2588)

```typescript
private _circleNavigateToTarget(deltaTime: number): void {
		const actor = this.actor;
		const target = this.target!;
		// 如果目标已销毁，停止跟随
		if (target.destroyed) {
			return this.stopMoving();
		}
		const sx = actor.x;
		const sy = actor.y;
		const distX = target.x - sx;
		const distY = target.y - sy;
		// 如果角色距离小于等于最大距离，进入跟随缓冲模式(100ms)
		if (Math.sqrt(distX ** 2 + distY ** 2) <= this.maxDistInner) {
			this.movementPath = null;
			this._switchToFollowTargetBuffer();
			return;
		}
		// 每隔一段时间计算移动路径
		if (!this.movementPath || (this.timeout -= deltaTime) <= 0) {
			let { x, y } = target;
			const offset = this.followingOffset;
			if (offset !== 0 && this.maxDistInner > 0) {
				// 计算跟随偏移距离和偏移角度
				const offsetDist = Math.abs(this.maxDistInner * offset);
				const offsetAngle = offset > 0 ? Math.PI / 2 : -Math.PI / 2;
				const angle = Math.atan2(distY, distX) + offsetAngle;
				x += offsetDist * Math.cos(angle);
				y += offsetDist * Math.sin(angle);
			}
			this.movementPath = PathFinder.createPath(
				sx,
				sy,
				x,
				y,
				actor.passage,
				this.bypass
			);
			this.timeout = 500;
		}
		// 逐帧计算角度，并计算移动速度分量
		const path = this.movementPath;
		const pi = path.index;
		const dx = path[pi];
		const dy = path[pi + 1];
		const pDistX = dx - sx;
		const pDistY = dy - sy;
		const angle = Math.atan2(pDistY, pDistX);
		actor.updateAngle(angle);
		this.calculateVelocity(angle);

		// 计算当前帧向前移动的距离
		const mx = this.velocityX * deltaTime;
		const my = this.velocityY * deltaTime;
		if (
			Math.abs(pDistX) <= Math.abs(mx) + 0.0001 &&
			Math.abs(pDistY) <= Math.abs(my) + 0.0001
		) {
			actor.setPosition(dx, dy);
			path.index += 2;
			if (path.index === path.length) {
				this.movementPath = null;
			}
		} else {
			actor.move(mx, my);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
