---
sidebar_position: 1
title: _circleApproachTarget 圆形模式 - 接近目标角色
---

## _circleApproachTarget

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

圆形模式 - 接近目标角色

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2555 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2555)

```typescript
private _circleApproachTarget(deltaTime: number): void {
		const actor = this.actor;
		const target = this.target!;
		// 如果目标已销毁，停止跟随
		if (target.destroyed) {
			return this.stopMoving();
		}
		let distX = target.x - actor.x;
		let distY = target.y - actor.y;
		// 如果角色距离小于等于最大距离，进入跟随缓冲模式(100ms)
		if (Math.sqrt(distX ** 2 + distY ** 2) <= this.maxDistInner) {
			return this._switchToFollowTargetBuffer();
		}
		let angle = Math.atan2(distY, distX);
		const offset = this.followingOffset;
		if (offset !== 0 && this.maxDistInner > 0) {
			// 计算跟随偏移距离和偏移角度
			const offsetDist = Math.abs(this.maxDistInner * offset);
			angle += offset > 0 ? Math.PI / 2 : -Math.PI / 2;
			// 加上偏移分量，计算朝向偏移目标点的角度
			distX += offsetDist * Math.cos(angle);
			distY += offsetDist * Math.sin(angle);
			angle = Math.atan2(distY, distX);
		}
		// 向接近目标的方向移动
		this.calculateVelocity(angle);
		this.updateForwardMovement(deltaTime);
	}
```

---



文档生成时间：2026/1/31 13:13:58
