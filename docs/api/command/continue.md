---
sidebar_position: 1
title: continue 继续循环
---

## continue

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

继续循环

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 3449 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L3449)

```typescript
protected continue(): CommandFunction | null {
		const { stack } = this;
		const { length } = stack;
		let i = length;
		while (--i >= 0) {
			const context = stack[i];
			if (context.loop) {
				const { commands } = context;
				return () => {
					let fn;
					const index = commands.length - 1;
					if (CommandList === commands) {
						fn = () => {
							CommandIndex = index;
							return true;
						};
					} else {
						fn = () => {
							CommandList = commands;
							CommandIndex = index;
							return true;
						};
					}
					// 编译时不能确定当前指令栈长度，因此使用运行时编译
					return (CommandList[CommandIndex - 1] = fn)();
				};
			}
		}
		return null;
	}
```

---



文档生成时间：2026/1/31 13:13:58
