---
sidebar_position: 1
title: changeActorState 改变角色状态
---

## changeActorState

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

改变角色状态

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, operation, stateId, state, \}` | `\{
		actor\: ActorGetter;
		operation\: "add" \| "remove" \| "remove\-instance";
		stateId\?\: string;
		state\?\: StateGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 6933 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6933)

```typescript
protected changeActorState({
		actor,
		operation,
		stateId,
		state,
	}: {
		actor: ActorGetter;
		operation: "add" | "remove" | "remove-instance";
		stateId?: string;
		state?: StateGetter;
	}): CommandFunction | null {
		const getActor = Command.compileActor(actor);
		switch (operation) {
			case "add": {
				const data = Data.states[stateId!];
				return !data
					? null
					: () => {
							const actor = getActor();
							if (actor) {
								const state = new State(data);
								if (CurrentEvent.casterActor) {
									state.caster = CurrentEvent.casterActor;
								}
								state.currentTime = 60000;
								state.duration = 60000;
								actor.state.add(state);
							}
							return true;
					  };
			}
			case "remove":
				return () => {
					getActor()?.state.delete(stateId!);
					return true;
				};
			case "remove-instance": {
				const getState = Command.compileState(state!);
				return () => {
					const state = getState();
					if (state) {
						getActor()?.state.remove(state);
					}
					return true;
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
