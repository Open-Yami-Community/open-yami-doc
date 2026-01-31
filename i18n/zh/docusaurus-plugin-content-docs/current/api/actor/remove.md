---
sidebar_position: 1
title: remove 从目标列表中移除角色
---

## remove

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

从目标列表中移除角色

参数 `actor`: 目标角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `Actor` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5531 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5531)

```typescript
public remove(actor: Actor): void {
		const index = this.targets.indexOf(actor);
		if (index !== -1) {
			// 如果存在该目标，则移除目标和仇恨值
			// 并让目标角色将本角色从相关列表中移除
			this.targets.splice(index, 1);
			this.threats.splice(index, 1);
			actor.target.relatedTargets.remove(this.actor);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
