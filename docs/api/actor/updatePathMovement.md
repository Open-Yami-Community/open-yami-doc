---
sidebar_position: 1
title: updatePathMovement 更新角色路径移动
---

## updatePathMovement

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

更新角色路径移动

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2442 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2442)

```typescript
private updatePathMovement(deltaTime: number): void {
		// 逐帧计算角度，并计算移动速度分量
		const actor = this.actor;
		const path = this.movementPath!;
		if (this.timeout !== -1 && (this.timeout -= deltaTime) <= 0) {
			const destX = path[path.length - 2];
			const destY = path[path.length - 1];
			return this.navigateTo(destX, destY, this.bypass);
		}
		const pi = path.index;
		const dx = path[pi];
		const dy = path[pi + 1];
		const distX = dx - actor.x;
		const distY = dy - actor.y;
		const angle = Math.atan2(distY, distX);
		actor.updateAngle(angle);
		this.calculateVelocity(angle);

		// 计算当前帧向前移动的距离
		const mx = this.velocityX * deltaTime;
		const my = this.velocityY * deltaTime;
		if (
			Math.abs(distX) <= Math.abs(mx) + 0.0001 &&
			Math.abs(distY) <= Math.abs(my) + 0.0001
		) {
			// 如果目标点在当前帧移动范围内，则将角色位置设为目标点
			// 并且将路径索引指向下一个路线节点
			actor.setPosition(dx, dy);
			path.index += 2;
			// 如果已经是终点，则停止移动
			if (path.index === path.length) {
				this.stopMoving();
			}
		} else {
			// 将角色的位置加上当前帧移动距离
			actor.move(mx, my);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
