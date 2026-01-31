---
sidebar_position: 1
title: _circleLeaveTarget 圆形模式 - 远离目标角色
---

## _circleLeaveTarget

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

圆形模式 - 远离目标角色

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2659 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2659)

```typescript
private _circleLeaveTarget(deltaTime: number): void {
		const actor = this.actor;
		const target = this.target!;
		// 如果目标已销毁，停止跟随
		if (target.destroyed) {
			return this.stopMoving();
		}
		const distX = actor.x - target.x;
		const distY = actor.y - target.y;
		// 如果角色距离大于等于最小距离，进入跟随缓冲模式(100ms)
		if (Math.sqrt(distX ** 2 + distY ** 2) >= this.minDistInner) {
			return this._switchToFollowTargetBuffer();
		}
		// 向远离目标的方向移动
		const angle = Math.atan2(distY, distX);
		this.calculateVelocity(angle);
		this.updateForwardMovement(deltaTime);
	}
```

---



文档生成时间：2026/1/31 13:13:58
