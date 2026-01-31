---
sidebar_position: 1
title: if 如果
---

## if

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

如果

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ branches, elseCommands, \}` | `\{
		branches\: Array&lt;any&gt;;
		elseCommands\?\: CommandDataList;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 2997 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L2997)

```typescript
protected if({
		branches,
		elseCommands,
	}: {
		branches: Array<any>;
		elseCommands?: CommandDataList;
	}): CommandFunction {
		const { commands, index } = this.stack.get();
		const pop = Command.goto(commands, index + 1);
		const length = branches.length;
		const testers = new Array(length);
		const functions = new Array(length);
		for (let i = 0; i < length; i++) {
			const { mode, conditions, commands } = branches[i];
			testers[i] = Command.compileConditions(mode, conditions);
			functions[i] = Command.goto(Command.compile(commands, pop), 0);
		}
		const elseFn =
			elseCommands !== undefined
				? Command.goto(Command.compile(elseCommands, pop), 0)
				: Command.skip;
		if (length < 6) {
			const [a, b, c, d, e] = testers;
			const [f, g, h, i, j] = functions;
			switch (length) {
				case 1:
					return () => (a() ? f : elseFn)();
				case 2:
					return () => (a() ? f : b() ? g : elseFn)();
				case 3:
					return () => (a() ? f : b() ? g : c() ? h : elseFn)();
				case 4:
					return () => (a() ? f : b() ? g : c() ? h : d() ? i : elseFn)();
				case 5:
					return () =>
						(a() ? f : b() ? g : c() ? h : d() ? i : e() ? j : elseFn)();
			}
		}
		return () => {
			for (let i = 0; i < length; i++) {
				if (testers[i]()) {
					return functions[i]();
				}
			}
			return elseFn();
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
