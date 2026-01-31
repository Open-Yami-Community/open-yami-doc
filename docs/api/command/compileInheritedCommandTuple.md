---
sidebar_position: 1
title: compileInheritedCommandTuple 编译继承的事件指令函数元组
---

## compileInheritedCommandTuple

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译继承的事件指令函数元组

参数 `commands`: 指令函数列表

返回值:两个指令函数

### 返回值

类型: `\[CommandFunction, CommandFunction\]`

两个指令函数

### 源代码

**位置**: [第 3977 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L3977)

```typescript
private compileInheritedCommandTuple(): [CommandFunction, CommandFunction] {
		const inheritKey = Command.inheritKey;
		const attrMapKey = Symbol("ATTRIBUTES_BACKUP");
		let commands: CommandFunctionList | undefined;
		const fn1 = () => {
			const owner = CurrentEvent.parent;
			if (owner instanceof Actor || owner instanceof UIElement) {
				commands = this.getInheritedCommandList2(owner);
			} else if (
				owner instanceof Skill ||
				owner instanceof Trigger ||
				owner instanceof Item ||
				owner instanceof Equipment ||
				owner instanceof State
			) {
				commands = this.getInheritedCommandList(owner);
			} else {
				commands = undefined;
			}
			if (commands) {
				const event: any = CurrentEvent;
				(event[inheritKey] ??= []).push(commands);
				event[attrMapKey] = event.attributes;
				event.attributes = {};
				event.stack.push(CommandList, CommandIndex);
				CommandList = commands;
				CommandIndex = 0;
			}
			return true;
		};
		const fn2 = () => {
			if (commands) {
				const event: any = CurrentEvent;
				event[inheritKey].pop();
				event.attributes = event[attrMapKey];
			}
			return true;
		};
		return [fn1, fn2];
	}
```

---



文档生成时间：2026/1/31 13:13:58
