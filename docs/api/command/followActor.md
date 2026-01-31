---
sidebar_position: 1
title: followActor 跟随角色
---

## followActor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

跟随角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, target, mode, minDist, maxDist, offset, vertDist, bufferDist, navigate, bypass, once, wait, \}` | `\{
		actor\: ActorGetter;
		target\: ActorGetter;
		mode\: "circle" \| "rectangle";
		minDist\: number;
		maxDist\: number;
		offset\?\: number;
		vertDist\?\: number;
		bufferDist\: number;
		navigate\: boolean;
		bypass\?\: boolean;
		once\: boolean;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6394 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6394)

```typescript
protected followActor({
		actor,
		target,
		mode,
		minDist,
		maxDist,
		offset,
		vertDist,
		bufferDist,
		navigate,
		bypass,
		once,
		wait,
	}: {
		actor: ActorGetter;
		target: ActorGetter;
		mode: "circle" | "rectangle";
		minDist: number;
		maxDist: number;
		offset?: number;
		vertDist?: number;
		bufferDist: number;
		navigate: boolean;
		bypass?: boolean;
		once: boolean;
		wait: boolean;
	}): CommandFunction {
		// 补丁：2023-1-30
		bypass = bypass ?? false;
		// 补丁：2025-3-5
		bufferDist = bufferDist ?? 0;
		const getActor = Command.compileActor(actor);
		const getTarget = Command.compileActor(target);
		const getMinDist = Command.compileNumber(minDist);
		const getMaxDist = Command.compileNumber(maxDist);
		switch (mode) {
			case "circle":
				return () => {
					const actor = getActor();
					const target = getTarget();
					if (actor && target && actor !== target) {
						actor.navigator.followCircle(
							target,
							getMinDist(),
							getMaxDist(),
							offset,
							bufferDist,
							navigate,
							bypass,
							once
						);
						if (wait) {
							const event = CurrentEvent;
							actor.navigator.onFinish(() => {
								event.continue();
							});
							return CurrentEvent.pause();
						}
					}
					return true;
				};
			case "rectangle":
				return () => {
					const actor = getActor();
					const target = getTarget();
					if (actor && target && actor !== target) {
						actor.navigator.followRectangle(
							target,
							getMinDist(),
							getMaxDist(),
							vertDist,
							bufferDist,
							navigate,
							bypass,
							once
						);
						if (wait) {
							const event = CurrentEvent;
							actor.navigator.onFinish(() => {
								event.continue();
							});
							return CurrentEvent.pause();
						}
					}
					return true;
				};
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
