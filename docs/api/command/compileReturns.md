---
sidebar_position: 1
title: compileReturns 编译返回(后处理)
---

## compileReturns

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译返回(后处理)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `context` | `CompileTimeCommandContext` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 259 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L259)

```typescript
private compileReturns(context: CompileTimeCommandContext) {
		for (const { commands, index } of this.returns) {
			const commandFn = commands[index];
			const jumpToEnd = Command.goto(context.commands, context.index);
			// 替换指令占位函数
			if (commandFn === Command.skip) {
				commands[index] = jumpToEnd;
			} else {
				commands[index] = () => (commandFn(), jumpToEnd());
			}
		}
		this.returns = Array.empty;
	}
```

---



文档生成时间：2026/1/31 13:13:58
