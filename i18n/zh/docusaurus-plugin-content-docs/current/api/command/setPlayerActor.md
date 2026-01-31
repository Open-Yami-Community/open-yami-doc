---
sidebar_position: 1
title: setPlayerActor 设置玩家角色
---

## setPlayerActor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置玩家角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor \}` | `\{ actor\: ActorGetter \}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6862 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6862)

```typescript
protected setPlayerActor({ actor }: { actor: ActorGetter }): CommandFunction {
		const getActor = Command.compileActor(actor);
		return () => {
			const actor = getActor();
			if (actor instanceof GlobalActor) {
				Party.setPlayer(actor);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
