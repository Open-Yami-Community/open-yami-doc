---
sidebar_position: 1
title: setTriggerAngle 设置触发器角度
---

## setTriggerAngle

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置触发器角度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ trigger, angle, \}` | `\{
		trigger\: TriggerGetter;
		angle\: AngleGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7824 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7824)

```typescript
protected setTriggerAngle({
		trigger,
		angle,
	}: {
		trigger: TriggerGetter;
		angle: AngleGetter;
	}): CommandFunction {
		const getTrigger = Command.compileTrigger(trigger);
		const getAngle = Command.compileAngle(angle);
		return () => {
			const trigger = getTrigger();
			if (trigger) {
				trigger.setAngle(getAngle(trigger));
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
