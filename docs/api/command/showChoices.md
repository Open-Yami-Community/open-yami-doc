---
sidebar_position: 1
title: showChoices 显示选项
---

## showChoices

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

显示选项

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ choices, parameters, \}` | `\{
		choices\: Array&lt;any&gt;;
		parameters\: string;
	\}` | - | - |

### 返回值

类型: `Array&lt;CommandFunction&gt;`

### 源代码

**位置**: [第 1580 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L1580)

```typescript
protected showChoices({
		choices,
		parameters,
	}: {
		choices: Array<any>;
		parameters: string;
	}): Array<CommandFunction> {
		// 解析变量文本内容
		const method = this.showChoices as any;
		let { parseVariable } = method;
		if (!parseVariable) {
			const regexp = /<(local):(.*?)>|<(global):([0-9a-f]{16})>/g;
			const replacer = (
				match: string,
				m1?: string,
				m2?: string,
				m3?: string,
				m4?: string
			): any => {
				const tag = m1 ?? m3!;
				const key = m2 ?? m4!;
				switch (tag) {
					case "local":
						return CurrentEvent.attributes[key]?.toString();
					case "global":
						return Variable.get(key)?.toString();
				}
			};
			const mapper = (content: string) => content.replace(regexp, replacer);
			parseVariable = method.parseVariable = (contents: Array<string>) =>
				contents.map(mapper);
		}
		const { commands, index } = this.stack.get();
		const pop = Command.goto(commands, index + 2);
		const contents: Array<string> = [];
		const branches: Array<CommandFunctionList> = [];
		for (const choice of choices) {
			contents.push(choice.content);
			branches.push(Command.compile(choice.commands, pop));
		}
		const fn1 = () => {
			const list = EventManager.getEnabledEvents("showchoices");
			const fn =
				list.length === 0
					? Command.skip
					: () => {
							Command.parameters = parameters;
							Command.choiceContents = parseVariable(contents);
							Command.choiceIndex = -1;
							CurrentEvent.stack.push(CommandList, CommandIndex);
							for (let i = list.length - 1; i >= 1; i--) {
								CurrentEvent.stack.push(list[i], 0);
							}
							CommandList = list[0];
							CommandIndex = 0;
							return true;
					  };
			// 编译时不能确定事件已加载，因此使用运行时编译
			return (CommandList[CommandIndex - 1] = fn)();
		};
		const fn2 = () => {
			switch (Command.choiceIndex) {
				case -1:
					return true;
				default: {
					const commands = branches[Command.choiceIndex];
					if (commands) {
						CommandList = commands;
						CommandIndex = 0;
					}
					return true;
				}
			}
		};
		return [fn1, fn2];
	}
```

---



文档生成时间：2026/1/31 13:13:58
