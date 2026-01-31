---
sidebar_position: 1
title: changeActorMotion 改变角色动作
---

## changeActorMotion

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

改变角色动作

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, type, motion, \}` | `\{
		actor\: ActorGetter;
		type\: string;
		motion\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 7175 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7175)

```typescript
protected changeActorMotion({
		actor,
		type,
		motion,
	}: {
		actor: ActorGetter;
		type: string;
		motion: string;
	}): CommandFunction | null {
		const getActor = Command.compileActor(actor);
		const motionName = Enum.getValue(motion);
		return !motionName
			? null
			: () => {
					getActor()?.animationController.changeMotion(type, motionName);
					return true;
			  };
	}
```

---



文档生成时间：2026/1/31 13:13:58
