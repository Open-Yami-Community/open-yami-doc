---
sidebar_position: 1
title: changeThreat 增减仇恨值
---

## changeThreat

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

增减仇恨值

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, target, operation, threat, \}` | `\{
		actor\: ActorGetter;
		target\: ActorGetter;
		operation\: string;
		threat\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6519 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6519)

```typescript
protected changeThreat({
		actor,
		target,
		operation,
		threat,
	}: {
		actor: ActorGetter;
		target: ActorGetter;
		operation: string;
		threat: number | VariableGetter;
	}): CommandFunction {
		const method = this.changeThreat as any;
		if (!method.operationMap) {
			method.operationMap = {
				increase: "increaseThreat",
				decrease: "decreaseThreat",
			};
		}
		const OP = method.operationMap[operation] as
			| "increaseThreat"
			| "decreaseThreat";
		const getActor = Command.compileActor(actor);
		const getTarget = Command.compileActor(target);
		const getThreat = Command.compileNumber(threat);
		return () => {
			const actor = getActor();
			const target = getTarget();
			const threat = getThreat();
			if (actor && target && actor !== target && threat > 0) {
				actor.target[OP](target, threat);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
