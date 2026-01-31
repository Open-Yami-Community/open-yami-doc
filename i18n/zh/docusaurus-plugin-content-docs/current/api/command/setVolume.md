---
sidebar_position: 1
title: setVolume 设置音量
---

## setVolume

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置音量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ type, volume, easingId, duration, wait, \}` | `\{
		type\: AudioType;
		volume\: number \| VariableGetter;
		easingId\: string;
		duration\: number;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6167 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6167)

```typescript
protected setVolume({
		type,
		volume,
		easingId,
		duration,
		wait,
	}: {
		type: AudioType;
		volume: number | VariableGetter;
		easingId: string;
		duration: number;
		wait: boolean;
	}): CommandFunction {
		const getVolume = Command.compileNumber(volume, 0, 0, 1);
		return () => {
			AudioManager[type].setVolume(getVolume(), easingId, duration);
			if (wait && duration > 0) {
				return CurrentEvent.wait(duration);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
