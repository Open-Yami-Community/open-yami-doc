---
sidebar_position: 1
title: compileCommandTuple 编译子事件指令函数元组
---

## compileCommandTuple

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译子事件指令函数元组

参数 `commands`: 指令函数列表

返回值:两个指令函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `commands` | `CommandFunctionList` | - | - |

### 返回值

类型: `\[CommandFunction, CommandFunction\]`

两个指令函数

### 源代码

**位置**: [第 3935 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L3935)

```typescript
private compileCommandTuple(
		commands: CommandFunctionList
	): [CommandFunction, CommandFunction] {
		const fn1 = () => {
			CurrentEvent.stack.push(CommandList, CommandIndex);
			CommandList = commands;
			CommandIndex = 0;
			return true;
		};
		const fn2 = Command.skip;
		return [fn1, fn2];
	}
```

---



文档生成时间：2026/1/31 13:13:58
