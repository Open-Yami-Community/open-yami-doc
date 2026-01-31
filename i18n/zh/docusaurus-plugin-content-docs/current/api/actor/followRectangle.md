---
sidebar_position: 1
title: followRectangle // 跟随目标角色(矩形模式)
---

## followRectangle

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

// 跟随目标角色(矩形模式)

参数 `target`: 目标角色

参数 `minDist`: 保持最小水平距离

参数 `maxDist`: 保持最大水平距离

参数 `vertDist`: 保持最大垂直距离

参数 `bufferDist`: 跟随缓冲距离

参数 `navigate`: 是否开启自动寻路

参数 `bypass`: 自动寻路是否绕过角色

参数 `once`: 跟随一次(到达位置后停止移动)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `target` | `Actor` | - | - |
| `minDist` | `number` | - | - |
| `maxDist` | `number` | - | - |
| `vertDist` | `number` | - | n0 |
| `bufferDist` | `any` | - | n0 |
| `navigate` | `boolean` | - | false |
| `bypass` | `boolean` | - | false |
| `once` | `boolean` | - | false |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2390 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2390)

```typescript
public followRectangle(
		target: Actor,
		minDist: number,
		maxDist: number,
		vertDist: number = 0,
		bufferDist = 0,
		navigate: boolean = false,
		bypass: boolean = false,
		once: boolean = false
	): void {
		if (this.mode !== "follow") {
			this.stopMoving();
			this.mode = "follow";
		} else {
			this.movementPath = null;
		}
		// 调整缓冲距离到合理范围
		const width = Math.max(maxDist - minDist - 0.1, 0);
		const buffer = Math.clamp(bufferDist, 0, width / 2);
		const buffer2 = Math.clamp(bufferDist, 0, vertDist);
		this.target = target;
		// 设置最小和最大距离(至少是最小距离 + 0.1)
		this.minDist = minDist;
		this.maxDist = Math.max(maxDist, minDist + 0.1);
		this.vertDist = vertDist;
		this.minDistInner = this.minDist + buffer;
		this.maxDistInner = this.maxDist - buffer;
		this.vertDistInner = this.vertDist - buffer2;
		this.followingNavigate = navigate;
		this.bypass = bypass;
		this.followOnce = once;
		this.followTarget = this._rectangleFollowTarget;
		// 设置更新函数为：跟随角色
		this.update = this.followTarget;
	}
```

---



文档生成时间：2026/1/31 13:13:58
