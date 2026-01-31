---
sidebar_position: 1
title: setPan 设置声像
---

## setPan

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置声像

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ type, pan, easingId, duration, wait, \}` | `\{
		type\: AudioType;
		pan\: number \| VariableGetter;
		easingId\: string;
		duration\: number;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6191 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6191)

```typescript
protected setPan({
		type,
		pan,
		easingId,
		duration,
		wait,
	}: {
		type: AudioType;
		pan: number | VariableGetter;
		easingId: string;
		duration: number;
		wait: boolean;
	}): CommandFunction {
		const getPan = Command.compileNumber(pan, 0, -1, 1);
		return () => {
			AudioManager[type].setPan(getPan(), easingId, duration);
			if (wait && duration > 0) {
				return CurrentEvent.wait(duration);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
