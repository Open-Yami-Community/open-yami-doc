---
sidebar_position: 1
title: compileTrigger 编译触发器对象
---

## compileTrigger

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译触发器对象

参数 `trigger`: 触发器访问器

返回值:触发器访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `trigger` | `TriggerGetter` | - | - |

### 返回值

类型: `() =&gt; Trigger \| undefined`

触发器访问器函数

### 源代码

**位置**: [第 751 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L751)

```typescript
private compileTrigger(trigger: TriggerGetter): () => Trigger | undefined {
		switch (trigger.type) {
			case "trigger":
				return () => {
					const object = CurrentEvent.triggerObject;
					return Command.filterValidObject(
						object instanceof Trigger ? object : undefined
					);
				};
			case "latest":
				return () => Command.filterValidObject(Trigger.latest);
			case "variable": {
				const getTrigger = Command.compileVariable(
					trigger.variable,
					Attribute.TRIGGER_GET
				);
				return () => Command.filterValidObject(getTrigger());
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
