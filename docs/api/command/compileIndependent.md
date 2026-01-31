---
sidebar_position: 1
title: compileIndependent 编译独立指令
---

## compileIndependent

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译独立指令

参数 `commands`: 指令数据列表

参数 `callback`: 指令执行完毕时回调函数

参数 `loop`: 当前指令列表是否处于循环状态

返回值:编译后的事件指令函数列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `commands` | `CommandDataList` | - | - |

### 返回值

类型: `CommandFunctionList`

编译后的事件指令函数列表

### 源代码

**位置**: [第 182 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L182)

```typescript
public compileIndependent(commands: CommandDataList): CommandFunctionList {
		const { stack, labels, jumps, returns } = Command;
		Command.stack = new CompileTimeCommandStack();
		const compiledCommands = Command.compile(commands);
		Command.stack = stack;
		Command.labels = labels;
		Command.jumps = jumps;
		Command.returns = returns;
		return compiledCommands;
	}
```

---



文档生成时间：2026/1/31 13:13:58
