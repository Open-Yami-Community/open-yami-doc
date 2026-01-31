---
sidebar_position: 1
title: setSprite 设置角色的精灵图
---

## setSprite

**类型**: `MethodDeclaration`

**所属类**: `AnimationManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置角色的精灵图

参数 `key`: 动画键

参数 `spriteId`: 精灵图ID

参数 `imageId`: 图像文件ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |
| `spriteId` | `string` | - | - |
| `imageId` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3071 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3071)

```typescript
public setSprite(key: string, spriteId: string, imageId: string): void {
		const animation = this.keyMap[key];
		if (animation && spriteId) {
			// 创建优先精灵图像映射表
			if (!animation.priorityImages) {
				animation.priorityImages = {};
				animation.setSpriteImages(animation.priorityImages);
			}
			// 修改角色精灵表中的键值
			animation.priorityImages[spriteId] = imageId;
			// 如果角色动画已经加载了同名纹理，则删除
			animation?.deleteTexture(spriteId);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
