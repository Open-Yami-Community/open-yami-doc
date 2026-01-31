---
sidebar_position: 1
title: restart 重新播放动作
---

## restart

**类型**: `MethodDeclaration`

**所属类**: `AnimationController`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

重新播放动作

### 返回值

类型: `void`

### 源代码

**位置**: [第 3316 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3316)

```typescript
public restart(): void {
		if (this.animation) {
			this.playing = false;
			this.animation.speed = 1;
			if (this.animation.setMotion(this.getCurrentMotionName())) {
				this.animation.restart();
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
