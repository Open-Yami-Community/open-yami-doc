---
sidebar_position: 1
title: switchCollisionSystem 开关碰撞系统
---

## switchCollisionSystem

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

开关碰撞系统

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ operation, \}` | `\{
		operation\:
			\| "enable\-actor\-collision"
			\| "disable\-actor\-collision"
			\| "enable\-scene\-collision"
			\| "disable\-scene\-collision";
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8800 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8800)

```typescript
protected switchCollisionSystem({
		operation,
	}: {
		operation:
			| "enable-actor-collision"
			| "disable-actor-collision"
			| "enable-scene-collision"
			| "disable-scene-collision";
	}): CommandFunction {
		switch (operation) {
			case "enable-actor-collision":
				return () => {
					ActorCollider.actorCollisionEnabled = true;
					return true;
				};
			case "disable-actor-collision":
				return () => {
					ActorCollider.actorCollisionEnabled = false;
					return true;
				};
			case "enable-scene-collision":
				return () => {
					ActorCollider.sceneCollisionEnabled = true;
					return true;
				};
			case "disable-scene-collision":
				return () => {
					ActorCollider.sceneCollisionEnabled = false;
					return true;
				};
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
