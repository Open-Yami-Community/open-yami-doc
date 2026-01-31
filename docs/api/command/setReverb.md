---
sidebar_position: 1
title: setReverb 设置混响
---

## setReverb

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置混响

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ type, dry, wet, easingId, duration, wait, \}` | `\{
		type\: AudioType;
		dry\: number;
		wet\: number;
		easingId\: string;
		duration\: number;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6215 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6215)

```typescript
protected setReverb({
		type,
		dry,
		wet,
		easingId,
		duration,
		wait,
	}: {
		type: AudioType;
		dry: number;
		wet: number;
		easingId: string;
		duration: number;
		wait: boolean;
	}): CommandFunction {
		const getDry = Command.compileNumber(dry, 0, 0, 1);
		const getWet = Command.compileNumber(wet, 0, 0, 1);
		return () => {
			AudioManager[type].setReverb(getDry(), getWet(), easingId, duration);
			if (wait && duration > 0) {
				return CurrentEvent.wait(duration);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
