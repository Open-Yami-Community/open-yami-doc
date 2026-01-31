---
sidebar_position: 1
title: setAnimation 设置角色动画
---

## setAnimation

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置角色动画

参数 `animationId`: 动画文件ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `animationId` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 834 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L834)

```typescript
public setAnimation(animationId: string): void {
		this.animation?.finish();
		const data = Data.animations[animationId];
		if (data) {
			// 如果动画ID有效，创建新的动画播放器
			const animation = new AnimationPlayer(data);
			animation.rotatable = this.data.rotatable;
			animation.syncAngle = true;
			// 角色精灵图像优先于默认动画精灵图像
			animation.setSpriteImages(this.sprites);
			this.animationManager.set("actor", animation);
			this.animation = animation;
		} else if (this.animation) {
			// 否则销毁上一个动画播放器
			this.animationManager.delete("actor");
			this.animation = null;
		}
		// 绑定到动画控制器
		this.animationController.bindAnimation(this.animation);
	}
```

---



文档生成时间：2026/1/31 13:13:57
