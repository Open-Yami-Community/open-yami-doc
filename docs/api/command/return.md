---
sidebar_position: 1
title: return 返回值
---

## return

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

返回值

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ type, value \}` | `GlobalEventResultGetter` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 274 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L274)

```typescript
protected return({ type, value }: GlobalEventResultGetter): CommandFunction {
		const { commands, index } = this.stack.get();
		this.returns.push({ commands, index });
		const returnKey = this.returnKey;
		const setter =
			type === "none"
				? Function.empty
				: (value: any) => {
						(CurrentEvent.attributes as any)[returnKey] = value;
				  };
		switch (type) {
			case "none":
				return Command.skip;
			case "boolean":
				return () => (setter(value), true);
			case "number": {
				const getNumber = Command.compileNumber(value);
				return () => (setter(getNumber()), true);
			}
			case "string": {
				const getString = Command.compileString(value);
				return () => (setter(getString()), true);
			}
			case "object": {
				const getObject = Command.compileVariable(value, Attribute.OBJECT_GET);
				return () => (setter(getObject()), true);
			}
			case "actor": {
				const getActor = Command.compileActor(value);
				return () => (setter(getActor()), true);
			}
			case "skill": {
				const getSkill = Command.compileSkill(value);
				return () => (setter(getSkill()), true);
			}
			case "state": {
				const getState = Command.compileState(value);
				return () => (setter(getState()), true);
			}
			case "equipment": {
				const getEquipment = Command.compileEquipment(value);
				return () => (setter(getEquipment()), true);
			}
			case "item": {
				const getItem = Command.compileItem(value);
				return () => (setter(getItem()), true);
			}
			case "trigger": {
				const getTrigger = Command.compileTrigger(value);
				return () => (setter(getTrigger()), true);
			}
			case "light": {
				const getLight = Command.compileLight(value);
				return () => (setter(getLight()), true);
			}
			case "element": {
				const getElement = Command.compileElement(value);
				return () => (setter(getElement()), true);
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
