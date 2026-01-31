---
sidebar_position: 1
title: detectTargets 探测目标
---

## detectTargets

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

探测目标

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, distance, selector, inSight, \}` | `\{
		actor\: ActorGetter;
		distance\: number \| VariableGetter;
		selector\: ActorSelector;
		inSight\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7575 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7575)

```typescript
protected detectTargets({
		actor,
		distance,
		selector,
		inSight,
	}: {
		actor: ActorGetter;
		distance: number | VariableGetter;
		selector: ActorSelector;
		inSight: boolean;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		const getDistance = Command.compileNumber(distance);
		return () => {
			getActor()?.target.detect(getDistance(), selector, inSight);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
