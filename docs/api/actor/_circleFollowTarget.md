---
sidebar_position: 1
title: _circleFollowTarget 圆形模式 - 跟随目标角色
---

## _circleFollowTarget

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

圆形模式 - 跟随目标角色

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2515 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2515)

```typescript
private _circleFollowTarget(deltaTime: number): void {
		const actor = this.actor;
		const target = this.target!;
		// 如果目标已销毁，停止跟随
		if (target.destroyed) {
			return this.stopMoving();
		}
		const dist = Math.sqrt(
			(actor.x - target.x) ** 2 + (actor.y - target.y) ** 2
		);
		// 如果角色距离大于最大距离，开始接近
		// 设置更新函数为：接近目标(圆形模式)
		if (dist > this.maxDist) {
			actor.animationController.startMoving();
			this.animBufferTime = 0;
			this.update = this.followingNavigate
				? this._circleNavigateToTarget
				: this._circleApproachTarget;
			return this.update(deltaTime);
		}
		// 如果角色距离小于最小距离，开始远离
		// 设置更新函数为：远离目标(圆形模式)
		if (dist < this.minDist) {
			actor.animationController.startMoving();
			this.animBufferTime = 0;
			this.update = this._circleLeaveTarget;
			return this.update(deltaTime);
		}
		// 如果角色的位置已经在跟随范围之内
		if (this.animBufferTime === 0) {
			// 进入跟随缓冲模式
			this.update = this._switchToFollowTargetBuffer;
			return this.update(deltaTime);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
