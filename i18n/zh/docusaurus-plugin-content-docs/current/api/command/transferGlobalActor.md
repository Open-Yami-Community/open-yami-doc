---
sidebar_position: 1
title: transferGlobalActor 转移全局角色
---

## transferGlobalActor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

转移全局角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, position, \}` | `\{
		actor\: ActorGetter;
		position\: PositionGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7404 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7404)

```typescript
protected transferGlobalActor({
		actor,
		position,
	}: {
		actor: ActorGetter;
		position: PositionGetter;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		const getPoint = Command.compilePosition(position);
		return () => {
			const actor = getActor();
			const point = getPoint();
			if (actor instanceof GlobalActor && point) {
				actor.transferToScene(point.x, point.y);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
