---
sidebar_position: 1
title: resetTargets 重置目标角色列表
---

## resetTargets

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

重置目标角色列表

### 返回值

类型: `void`

### 源代码

**位置**: [第 5474 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5474)

```typescript
public resetTargets(): void {
		const targets = this.targets;
		const length = targets.length;
		if (length !== 0) {
			const owner = this.actor;
			// 遍历所有目标，将本角色从它们的相关列表中删除
			for (let i = 0; i < length; i++) {
				targets[i].target.relatedTargets.remove(owner);
			}
			// 重置目标和仇恨值列表
			this.targets = [];
			this.threats = [];
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
