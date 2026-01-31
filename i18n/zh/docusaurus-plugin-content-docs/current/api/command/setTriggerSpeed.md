---
sidebar_position: 1
title: setTriggerSpeed 设置触发器速度
---

## setTriggerSpeed

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置触发器速度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ trigger, speed, \}` | `\{
		trigger\: TriggerGetter;
		speed\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7808 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7808)

```typescript
protected setTriggerSpeed({
		trigger,
		speed,
	}: {
		trigger: TriggerGetter;
		speed: number | VariableGetter;
	}): CommandFunction {
		const getTrigger = Command.compileTrigger(trigger);
		const getSpeed = Command.compileNumber(speed);
		return () => {
			getTrigger()?.setSpeed(getSpeed());
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
