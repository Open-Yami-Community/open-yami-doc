---
sidebar_position: 1
title: append 添加角色到目标列表中
---

## append

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

添加角色到目标列表中

参数 `actor`: 目标角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `Actor` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5516 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5516)

```typescript
public append(actor: Actor): void {
		const index = this.targets.indexOf(actor);
		if (index === -1) {
			// 如果不存在该目标，则添加目标和仇恨值
			// 并让目标角色将本角色添加到相关列表
			this.targets.push(actor);
			this.threats.push(0);
			actor.target.relatedTargets.push(this.actor);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
