---
sidebar_position: 1
title: changeActorAnimation 改变角色动画
---

## changeActorAnimation

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

改变角色动画

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, animationId, \}` | `\{
		actor\: ActorGetter;
		animationId\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7141 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7141)

```typescript
protected changeActorAnimation({
		actor,
		animationId,
	}: {
		actor: ActorGetter;
		animationId: string;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		return () => {
			getActor()?.setAnimation(animationId);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
