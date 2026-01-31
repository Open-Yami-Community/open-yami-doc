---
sidebar_position: 1
title: startIdle 开始闲置动作
---

## startIdle

**类型**: `MethodDeclaration`

**所属类**: `AnimationController`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

开始闲置动作

### 返回值

类型: `void`

### 源代码

**位置**: [第 3294 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3294)

```typescript
public startIdle(): void {
		this.state = "idle";
		if (this.animation && this.playing === false) {
			if (this.animation.motionName === this.idleMotion) return;
			if (this.animation.setMotion(this.idleMotion)) {
				this.animation.restart();
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
