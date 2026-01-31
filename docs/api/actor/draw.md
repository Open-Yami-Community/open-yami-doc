---
sidebar_position: 1
title: draw 绘制角色动画
---

## draw

**类型**: `MethodDeclaration`

**所属类**: `AnimationManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

绘制角色动画

### 返回值

类型: `void`

### 源代码

**位置**: [第 3108 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3108)

```typescript
public draw(): void {
		for (const animation of this.list) {
			animation.draw();
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
