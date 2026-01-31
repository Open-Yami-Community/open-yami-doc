---
sidebar_position: 1
title: stopMoving 角色停止移动
---

## stopMoving

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

角色停止移动

### 返回值

类型: `void`

### 源代码

**位置**: [第 2237 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2237)

```typescript
public stopMoving(): void {
		if (this.mode !== "stop") {
			this.mode = "stop";
			this.target = null;
			this.movementPath = null;
			this.animBufferTime = 0;
			this.actor.animationController.startIdle();
			// 设置更新函数为：空函数
			this.update = Function.empty;
			// 执行结束回调(如果有)
			if (this.callbacks !== null) {
				for (const callback of this.callbacks) {
					callback();
				}
				this.callbacks = null;
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
