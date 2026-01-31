---
sidebar_position: 1
title: stopActorAnimation 停止角色动画
---

## stopActorAnimation

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

停止角色动画

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, \}` | `\{
		actor\: ActorGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7229 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7229)

```typescript
protected stopActorAnimation({
		actor,
	}: {
		actor: ActorGetter;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		return () => {
			getActor()?.animationController.stopMotion();
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
