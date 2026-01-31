---
sidebar_position: 1
title: increaseThreat 增加对目标角色的仇恨值，如果还不是目标，则将他放到目标列表中
---

## increaseThreat

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

增加对目标角色的仇恨值，如果还不是目标，则将他放到目标列表中

参数 `actor`: 目标角色

参数 `threat`: 增加的仇恨值

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `Actor` | - | - |
| `threat` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5362 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5362)

```typescript
public increaseThreat(actor: Actor, threat: number): void {
		const index = this.targets.indexOf(actor);
		if (index !== -1) {
			// 如果存在目标角色，增加仇恨值
			this.threats[index] += threat;
		} else if (actor.active) {
			// 如果不存在目标角色，且目标角色已激活
			// 添加目标角色和仇恨值，并让目标角色将自己添加为相关目标
			this.targets.push(actor);
			this.threats.push(threat);
			actor.target.relatedTargets.push(this.actor);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
