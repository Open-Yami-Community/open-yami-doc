---
sidebar_position: 1
title: _rectangleFollowTarget 矩形模式 - 跟随目标角色
---

## _rectangleFollowTarget

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

矩形模式 - 跟随目标角色

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2682 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2682)

```typescript
private _rectangleFollowTarget(deltaTime: number): void {
		const actor = this.actor;
		const target = this.target!;
		// 如果目标已销毁，停止跟随
		if (target.destroyed) {
			return this.stopMoving();
		}
		const distX = Math.abs(actor.x - target.x);
		const distY = Math.abs(actor.y - target.y);
		// 如果角色水平距离大于最大距离或小于最小距离
		// 或者角色垂直距离大于垂直距离(+0.0001容差)
		// 设置更新函数为：接近目标(矩形模式)
		if (
			distX > this.maxDist ||
			distX < this.minDist ||
			distY > this.vertDist + 0.0001
		) {
			actor.animationController.startMoving();
			this.animBufferTime = 0;
			this.update = this.followingNavigate
				? this._rectangleNavigateToTarget
				: this._rectangleApproachTarget;
			return this.update(deltaTime);
		}
		// 如果角色的位置已经在跟随范围之内(避免重复执行)
		if (this.animBufferTime === 0) {
			// 进入跟随缓冲模式
			this.update = this._switchToFollowTargetBuffer;
			return this.update(deltaTime);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
