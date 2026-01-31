---
sidebar_position: 1
title: transition 过渡
---

## transition

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

过渡

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ variable, start, end, easingId, duration, commands, \}` | `\{
		variable\: VariableGetter;
		start\: number \| VariableGetter;
		end\: number \| VariableGetter;
		easingId\: string;
		duration\: number \| VariableGetter;
		commands\: CommandDataList;
	\}` | - | - |

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 4489 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4489)

```typescript
protected transition({
		variable,
		start,
		end,
		easingId,
		duration,
		commands,
	}: {
		variable: VariableGetter;
		start: number | VariableGetter;
		end: number | VariableGetter;
		easingId: string;
		duration: number | VariableGetter;
		commands: CommandDataList;
	}): CommandFunction | null {
		if (commands.length === 0) {
			return null;
		}
		const context = Command.stack.get();
		const nextCommands = context.commands;
		const nextIndex = context.index + 1;
		const getStart = Command.compileNumber(start);
		const getEnd = Command.compileNumber(end);
		const getDuration = Command.compileNumber(duration);
		const setNumber = Command.compileVariable(variable, Attribute.NUMBER_SET);
		const setVariable: CommandFunction = () => {
			const transition = CurrentEvent.transitions![0];
			transition.elapsed -= CurrentEvent.timer!.duration;
			const { start, end, duration } = transition;
			const easing = Easing.get(easingId);
			const time = easing.get(transition.elapsed / duration);
			const value = start * (1 - time) + end * time;
			setNumber(value);
			return true;
		};
		const checkLoopCond = () => {
			const { elapsed, duration } = CurrentEvent.transitions![0];
			if (elapsed < duration) {
				CommandIndex = 0;
				return CurrentEvent.wait(0);
			} else {
				CurrentEvent.transitions!.shift();
				CommandList = nextCommands;
				CommandIndex = nextIndex;
				return true;
			}
		};
		const loopCommands = Command.compile(
			[setVariable, ...commands] as CommandDataList,
			checkLoopCond
		);
		return () => {
			const duration = getDuration();
			if (duration > 0) {
				if (!CurrentEvent.transitions) {
					CurrentEvent.transitions = [];
				}
				CurrentEvent.transitions.unshift({
					elapsed: 0,
					start: getStart(),
					end: getEnd(),
					duration: duration,
				});
				const timer = CurrentEvent.getTimer();
				timer.duration = 0;
				CommandList = loopCommands;
				CommandIndex = 0;
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
