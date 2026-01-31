---
sidebar_position: 1
title: playMotion 播放角色动作(结束时恢复动作)
---

## playMotion

**类型**: `MethodDeclaration`

**所属类**: `AnimationController`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

播放角色动作(结束时恢复动作)

参数 `motionName`: 动作名称

参数 `speed`: 播放速度

返回值:目标动画播放器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `motionName` | `string` | - | - |
| `speed` | `number` | - | n1 |

### 返回值

类型: `AnimationPlayer \| undefined`

目标动画播放器

### 源代码

**位置**: [第 3344 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3344)

```typescript
public playMotion(
		motionName: string,
		speed: number = 1
	): AnimationPlayer | undefined {
		if (this.animation?.setMotion(motionName)) {
			this.playing = true;
			this.animation.speed = speed;
			// 重新播放动画
			this.animation.restart();
			this.animation.onFinish(() => {
				// 播放结束后设置回闲置或移动动作
				this.restart();
			});
			// 返回动画播放器
			return this.animation;
		}
		return undefined;
	}
```

---



文档生成时间：2026/1/31 13:13:58
