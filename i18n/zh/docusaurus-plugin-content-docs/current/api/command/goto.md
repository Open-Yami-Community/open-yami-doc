---
sidebar_position: 1
title: goto 编译跳转函数
---

## goto

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译跳转函数

参数 `commands`: 编译后的指令函数列表

参数 `index`: 跳转到列表中的索引位置

返回值:继续执行

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `commands` | `CommandFunctionList` | - | - |
| `index` | `number` | - | - |

### 返回值

类型: `CommandFunction`

继续执行

### 源代码

**位置**: [第 1528 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L1528)

```typescript
private goto(commands: CommandFunctionList, index: number): CommandFunction {
		// 跳转到头部
		if (index === 0) {
			return () => {
				CommandList = commands;
				CommandIndex = 0;
				return true;
			};
		}
		// 跳转到索引(通用)
		return () => {
			CommandList = commands;
			CommandIndex = index;
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
