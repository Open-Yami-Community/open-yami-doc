---
sidebar_position: 1
title: setTriggerDuration 设置触发器持续时间
---

## setTriggerDuration

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置触发器持续时间

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ trigger, operation, duration, \}` | `\{
		trigger\: TriggerGetter;
		operation\: "set" \| "increase" \| "decrease";
		duration\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7843 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7843)

```typescript
protected setTriggerDuration({
		trigger,
		operation,
		duration,
	}: {
		trigger: TriggerGetter;
		operation: "set" | "increase" | "decrease";
		duration: number | VariableGetter;
	}): CommandFunction {
		const getTrigger = Command.compileTrigger(trigger);
		const getDuration = Command.compileNumber(duration);
		return () => {
			const trigger = getTrigger();
			if (trigger) {
				switch (operation) {
					case "set":
						trigger.duration = getDuration();
						break;
					case "increase":
						trigger.duration += getDuration();
						break;
					case "decrease":
						trigger.duration -= getDuration();
						break;
				}
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
