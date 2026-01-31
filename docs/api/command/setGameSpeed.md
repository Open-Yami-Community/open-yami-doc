---
sidebar_position: 1
title: setGameSpeed 设置游戏速度
---

## setGameSpeed

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置游戏速度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ speed, easingId, duration, wait, \}` | `\{
		speed\: number \| VariableGetter;
		easingId\: string;
		duration\: number \| VariableGetter;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8724 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8724)

```typescript
protected setGameSpeed({
		speed,
		easingId,
		duration,
		wait,
	}: {
		speed: number | VariableGetter;
		easingId: string;
		duration: number | VariableGetter;
		wait: boolean;
	}): CommandFunction {
		const getSpeed = Command.compileNumber(speed, 0, 0, 10);
		const getDuration = Command.compileNumber(duration);
		return () => {
			const speed = getSpeed();
			const duration = getDuration();
			Time.setTimeScale(speed, easingId, duration);
			if (wait && duration > 0) {
				const event = CurrentEvent;
				Time.onTransitionEnd(() => {
					event.continue();
				});
				return CurrentEvent.pause();
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
