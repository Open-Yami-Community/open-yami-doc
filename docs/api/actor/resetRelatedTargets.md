---
sidebar_position: 1
title: resetRelatedTargets 重置相关目标角色列表
---

## resetRelatedTargets

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

重置相关目标角色列表

### 返回值

类型: `void`

### 源代码

**位置**: [第 5490 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5490)

```typescript
public resetRelatedTargets(): void {
		const relatedTargets = this.relatedTargets;
		const length = relatedTargets.length;
		if (length !== 0) {
			const owner = this.actor;
			// 遍历所有相关目标，将本角色从它们的目标和仇恨值列表中删除
			for (let i = 0; i < length; i++) {
				const actor = relatedTargets[i];
				const manager = actor.target;
				const targets = manager.targets;
				const threats = manager.threats;
				const index = targets.indexOf(owner);
				if (index !== -1) {
					targets.splice(index, 1);
					threats.splice(index, 1);
				}
			}
			// 重置相关列表
			this.relatedTargets = [];
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
