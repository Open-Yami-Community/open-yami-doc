---
sidebar_position: 1
title: decreaseThreat 减少对目标角色的仇恨值
---

## decreaseThreat

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

减少对目标角色的仇恨值

参数 `actor`: 目标角色

参数 `threat`: 减少的仇恨值

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `Actor` | - | - |
| `threat` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5381 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5381)

```typescript
public decreaseThreat(actor: Actor, threat: number): void {
		const index = this.targets.indexOf(actor);
		if (index !== -1) {
			// 如果存在目标角色，减少仇恨值
			this.threats[index] = Math.max(this.threats[index] - threat, 0);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
