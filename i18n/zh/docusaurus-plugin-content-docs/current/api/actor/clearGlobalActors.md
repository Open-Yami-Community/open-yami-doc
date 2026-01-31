---
sidebar_position: 1
title: clearGlobalActors 清除所有全局角色
---

## clearGlobalActors

**类型**: `MethodDeclaration`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

清除所有全局角色

### 返回值

类型: `void`

### 源代码

**位置**: [第 295 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L295)

```typescript
public clearGlobalActors(): void {
		this.idMap = {};
		// 遍历所有全局角色
		for (const actor of this.list) {
			// 从所有场景角色列表中移除该角色
			for (const context of Scene.contexts) {
				context?.actor.remove(actor);
			}
			actor.destroy();
		}
		this.list = [];
	}
```

---



文档生成时间：2026/1/31 13:13:57
