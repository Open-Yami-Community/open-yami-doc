---
sidebar_position: 1
title: _followTargetBuffer 跟随目标角色时用来切换状态的缓冲函数
---

## _followTargetBuffer

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

跟随目标角色时用来切换状态的缓冲函数

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2497 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2497)

```typescript
private _followTargetBuffer(deltaTime: number): void {
		// 缓冲时间结束后切换动画为idle动作
		// 避免跟随者移动速度>=目标时频繁地切换动作
		if ((this.animBufferTime -= deltaTime) <= 0) {
			this.animBufferTime = -1;
			this.actor.animationController.startIdle();
			// 设置更新函数为：跟随角色
			this.update = this.followTarget;
			return this.update(deltaTime);
		}
		// 缓冲未结束，调用跟随角色函数
		this.followTarget(deltaTime);
	}
```

---



文档生成时间：2026/1/31 13:13:58
