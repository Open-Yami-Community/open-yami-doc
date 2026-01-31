---
sidebar_position: 1
title: shakeScreen 震动屏幕
---

## shakeScreen

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

震动屏幕

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ mode, power, speed, easingId, duration, wait, \}` | `\{
		mode\: CameraShakeMode;
		power\: number;
		speed\: number;
		easingId\: string;
		duration\: number;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8431 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8431)

```typescript
protected shakeScreen({
		mode,
		power,
		speed,
		easingId,
		duration,
		wait,
	}: {
		mode: CameraShakeMode;
		power: number;
		speed: number;
		easingId: string;
		duration: number;
		wait: boolean;
	}): CommandFunction {
		return () => {
			Camera.shake(mode, power, speed, easingId, duration);
			if (wait && duration > 0) {
				return CurrentEvent.wait(duration);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
