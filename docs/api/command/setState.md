---
sidebar_position: 1
title: setState 设置状态
---

## setState

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置状态

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ state, operation, time, \}` | `\{
		state\: StateGetter;
		operation\: string;
		time\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 5828 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5828)

```typescript
protected setState({
		state,
		operation,
		time,
	}: {
		state: StateGetter;
		operation: string;
		time: number | VariableGetter;
	}): CommandFunction {
		const getState = Command.compileState(state);
		const getTime = Command.compileNumber(time);
		switch (operation) {
			case "set-time":
				return () => {
					getState()?.setTime(getTime());
					return true;
				};
			case "increase-time":
				return () => {
					getState()?.increaseTime(getTime());
					return true;
				};
			case "decrease-time":
				return () => {
					getState()?.decreaseTime(getTime());
					return true;
				};
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
