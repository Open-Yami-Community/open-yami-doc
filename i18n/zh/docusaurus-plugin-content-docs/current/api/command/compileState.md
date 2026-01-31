---
sidebar_position: 1
title: compileState 编译状态对象
---

## compileState

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译状态对象

参数 `state`: 状态访问器

返回值:状态访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `state` | `StateGetter` | - | - |

### 返回值

类型: `() =&gt; State \| undefined`

状态访问器函数

### 源代码

**位置**: [第 563 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L563)

```typescript
public compileState(state: StateGetter): () => State | undefined {
		switch (state.type) {
			case "trigger":
				return () => CurrentEvent.triggerState;
			case "latest":
				return () => State.latest;
			case "by-id": {
				const getActor = Command.compileActor(state.actor);
				return () => getActor()?.state.get(state.stateId);
			}
			case "variable":
				return Command.compileVariable(state.variable, Attribute.STATE_GET);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
