---
sidebar_position: 1
title: setEvent 设置事件
---

## setEvent

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ operation, variable, eventId, choiceIndex, \}` | `\{
		operation\: string;
		variable\?\: VariableGetter;
		eventId\?\: string;
		choiceIndex\?\: number;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 4414 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4414)

```typescript
protected setEvent({
		operation,
		variable,
		eventId,
		choiceIndex,
	}: {
		operation: string;
		variable?: VariableGetter;
		eventId?: string;
		choiceIndex?: number;
	}): CommandFunction {
		switch (operation) {
			case "stop-propagation":
				return () => {
					if (CurrentEvent.bubble !== false) {
						Input.bubbles.stop();
					}
					return true;
				};
			case "prevent-scene-input-events":
				return () => {
					Scene.preventInput();
					return true;
				};
			case "restore-scene-input-events":
				return () => {
					Scene.restoreInput();
					return true;
				};
			case "pause": {
				const setter = Command.compileVariable(variable!, Attribute.OBJECT_SET);
				return () => {
					setter(CurrentEvent);
					return CurrentEvent.pause();
				};
			}
			case "continue": {
				const getter = Command.compileVariable(variable!, Attribute.OBJECT_GET);
				const setter = Command.compileVariable(variable!, Attribute.OBJECT_SET);
				return () => {
					const event = getter();
					if (event instanceof EventHandler) {
						event.continue();
						setter(undefined);
					}
					return true;
				};
			}
			case "enable":
				return () => {
					EventManager.enable(eventId!);
					return true;
				};
			case "disable":
				return () => {
					EventManager.disable(eventId!);
					return true;
				};
			case "highest-priority":
				return () => {
					EventManager.setToHighestPriority(eventId!);
					return true;
				};
			case "goto-choice-branch": {
				const getIndex = Command.compileNumber(choiceIndex!);
				return () => {
					Command.choiceIndex = getIndex();
					return true;
				};
			}
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
