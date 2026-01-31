---
sidebar_position: 1
title: bindAnimation 绑定角色动画
---

## bindAnimation

**类型**: `MethodDeclaration`

**所属类**: `AnimationController`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

绑定角色动画

参数 `animation`: 动画实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `animation` | `AnimationPlayer \| null` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3262 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3262)

```typescript
public bindAnimation(animation: AnimationPlayer | null): void {
		this.animation = animation;
		if (animation) {
			// 设置角色动画的初始动作
			animation.setMotion(this.getCurrentMotionName());
			animation.setAngle(this.actor.angle);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
