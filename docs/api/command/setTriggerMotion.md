---
sidebar_position: 1
title: setTriggerMotion 设置触发器动作
---

## setTriggerMotion

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置触发器动作

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ trigger, motion, \}` | `\{
		trigger\: TriggerGetter;
		motion\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 7874 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7874)

```typescript
protected setTriggerMotion({
		trigger,
		motion,
	}: {
		trigger: TriggerGetter;
		motion: string;
	}): CommandFunction | null {
		const getTrigger = Command.compileTrigger(trigger);
		const motionName = Enum.getValue(motion);
		return !motionName
			? null
			: () => {
					getTrigger()?.animation?.setMotion(motionName);
					return true;
			  };
	}
```

---



文档生成时间：2026/1/31 13:13:58
