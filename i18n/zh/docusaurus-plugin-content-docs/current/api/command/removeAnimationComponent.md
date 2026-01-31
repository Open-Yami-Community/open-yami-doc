---
sidebar_position: 1
title: removeAnimationComponent 移除动画组件
---

## removeAnimationComponent

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

移除动画组件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, animationId, motion, \}` | `\{
		actor\: ActorGetter;
		animationId\: string;
		motion\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7372 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7372)

```typescript
protected removeAnimationComponent({
		actor,
		animationId,
		motion,
	}: {
		actor: ActorGetter;
		animationId: string;
		motion: string;
	}): CommandFunction {
		const key = animationId + motion;
		const getActor = Command.compileActor(actor);
		return () => {
			getActor()?.animationManager.delete(key);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
