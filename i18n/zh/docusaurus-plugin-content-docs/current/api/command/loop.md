---
sidebar_position: 1
title: loop 循环
---

## loop

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

循环

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ mode, conditions, commands, \}` | `\{
		mode\: string;
		conditions\: Array&lt;object&gt;;
		commands\: CommandDataList;
	\}` | - | - |

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 3181 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L3181)

```typescript
protected loop({
		mode,
		conditions,
		commands,
	}: {
		mode: string;
		conditions: Array<object>;
		commands: CommandDataList;
	}): CommandFunction | null {
		if (commands.length === 0) {
			return null;
		}
		const cmdpath = this.stack[0].path;
		const context = this.stack.get();
		const nextCommands = context.commands;
		const nextIndex = context.index + 1;
		let infiniteLoopTest = Function.empty;
		if (Stats.debug) {
			let timestamp = 0;
			let cycleCount = 0;
			infiniteLoopTest = () => {
				if (timestamp !== Time.timestamp) {
					timestamp = Time.timestamp;
					cycleCount = 1;
				} else if (++cycleCount > 100000000) {
					CommandList = nextCommands;
					CommandIndex = nextIndex;
					console.error(
						`The number of loops exceeds 100000000, it may be an infinite loop.\n${cmdpath}`
					);
				}
			};
		}
		if (conditions.length !== 0) {
			const tester = Command.compileConditions(mode, conditions);
			const loopCommands = Command.compile(
				commands,
				() => {
					if (tester()) {
						CommandIndex = 0;
						infiniteLoopTest();
					} else {
						CommandList = nextCommands;
						CommandIndex = nextIndex;
					}
					return true;
				},
				true
			);
			return () => {
				if (tester()) {
					CommandList = loopCommands;
					CommandIndex = 0;
				}
				return true;
			};
		} else {
			const loopCommands = Command.compile(
				commands,
				() => {
					CommandIndex = 0;
					infiniteLoopTest();
					return true;
				},
				true
			);
			return Command.goto(loopCommands, 0);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
