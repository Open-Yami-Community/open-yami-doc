---
sidebar_position: 1
title: _rectangleNavigateToTarget 矩形模式 - 导航到目标角色
---

## _rectangleNavigateToTarget

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

矩形模式 - 导航到目标角色

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2766 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2766)

```typescript
private _rectangleNavigateToTarget(deltaTime: number): void {
		const actor = this.actor;
		const target = this.target!;
		// 如果目标已销毁，停止跟随
		if (target.destroyed) {
			return this.stopMoving();
		}
		const sx = actor.x;
		const sy = actor.y;
		const tx = target.x;
		const ty = target.y;
		const dx =
			sx < tx
				? // 根据宿主角色在目标角色左侧或右侧的情况来计算终点水平坐标
				  Math.clamp(sx, tx - this.maxDistInner, tx - this.minDistInner)
				: Math.clamp(sx, tx + this.minDistInner, tx + this.maxDistInner);
		// 计算终点垂直坐标
		const dy = Math.clamp(sy, ty - this.vertDistInner, ty + this.vertDistInner);
		// 每隔一段时间计算移动路径
		if (!this.movementPath || (this.timeout -= deltaTime) <= 0) {
			this.movementPath = PathFinder.createPath(
				sx,
				sy,
				dx,
				dy,
				actor.passage,
				this.bypass
			);
			this.timeout = 500;
		}
		// 逐帧计算角度，并计算移动速度分量
		const path = this.movementPath;
		const pi = path.index;
		const px = path[pi];
		const py = path[pi + 1];
		const pDistX = px - sx;
		const pDistY = py - sy;
		if (pDistX === 0 && pDistY === 0) {
			this.velocityX = 0;
			this.velocityY = 0;
		} else {
			const angle = Math.atan2(pDistY, pDistX);
			actor.updateAngle(angle);
			this.calculateVelocity(angle);
		}

		// 计算当前帧向前移动的距离
		const mx = this.velocityX * deltaTime;
		const my = this.velocityY * deltaTime;
		// 由于计算移动速度现在已经是精确值
		// 这里的容差值0.0001有可能不需要了
		if (
			Math.abs(pDistX) <= Math.abs(mx) + 0.0001 &&
			Math.abs(pDistY) <= Math.abs(my) + 0.0001
		) {
			actor.setPosition(px, py);
			path.index += 2;
			if (path.index === path.length) {
				this.movementPath = null;
				const absDistX = Math.abs(actor.x - tx);
				const absDistY = Math.abs(actor.y - dy);
				if (
					absDistX >= this.minDistInner &&
					absDistX <= this.maxDistInner &&
					absDistY <= Math.abs(my) + 0.0001
				) {
					// 角色进入最小和最大距离的范围
					// 并且垂直移动距离超过了角色垂直距离
					// 则将角色垂直位置设为目标点垂直位置
					actor.setPosition(actor.x, dy);
					// 进入跟随缓冲模式
					this._switchToFollowTargetBuffer();
				}
			}
		} else {
			actor.move(mx, my);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
