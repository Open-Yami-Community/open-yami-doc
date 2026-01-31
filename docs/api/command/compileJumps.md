---
sidebar_position: 1
title: compileJumps 编译跳转(后处理)
---

## compileJumps

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译跳转(后处理)

### 返回值

类型: `void`

### 源代码

**位置**: [第 231 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L231)

```typescript
private compileJumps() {
		const { labels, jumps } = this;
		for (const { operation, label, commands, index } of jumps) {
			const context = labels[label];
			if (context) {
				const jump = Command.goto(context.commands, context.index);
				let fn;
				switch (operation) {
					case "jump":
						fn = jump;
						break;
					case "save-jump":
						fn = () => {
							CurrentEvent.savedCommands = CommandList;
							CurrentEvent.savedIndex = CommandIndex;
							return jump();
						};
						break;
				}
				// 替换指令占位函数
				commands[index] = fn;
			}
		}
		this.labels = Object.empty;
		this.jumps = Array.empty;
	}
```

---



文档生成时间：2026/1/31 13:13:58
