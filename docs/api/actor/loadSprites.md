---
sidebar_position: 1
title: loadSprites 加载初始动画精灵哈希表
---

## loadSprites

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

加载初始动画精灵哈希表

### 返回值

类型: `void`

### 源代码

**位置**: [第 592 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L592)

```typescript
private loadSprites(): void {
		const map = this.sprites;
		const sprites = this.data.sprites;
		const length = sprites.length;
		// 使用精灵数组生成哈希表
		for (let i = 0; i < length; i++) {
			const sprite = sprites[i];
			map[sprite.id] = sprite.image;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:57
