---
sidebar_position: 1
title: startMoving 开始移动动作
---

## startMoving

**类型**: `MethodDeclaration`

**所属类**: `AnimationController`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

开始移动动作

### 返回值

类型: `void`

### 源代码

**位置**: [第 3305 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3305)

```typescript
public startMoving(): void {
		this.state = "move";
		if (this.animation && this.playing === false) {
			if (this.animation.motionName === this.moveMotion) return;
			if (this.animation.setMotion(this.moveMotion)) {
				this.animation.restart();
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
