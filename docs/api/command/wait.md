---
sidebar_position: 1
title: wait 等待
---

## wait

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

等待

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ duration, \}` | `\{
		duration\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 4628 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4628)

```typescript
protected wait({
		duration,
	}: {
		duration: number | VariableGetter;
	}): CommandFunction {
		switch (typeof duration) {
			case "number":
				return () => CurrentEvent.wait(duration);
			case "object": {
				const getDuration = Command.compileNumber(duration);
				return () => CurrentEvent.wait(getDuration());
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
