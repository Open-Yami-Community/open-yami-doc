---
sidebar_position: 1
title: registerEvent 注册事件
---

## registerEvent

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

注册事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ target, actor, element, operation, type, priority, tag, commands, \}` | `\{
		target\: "global" \| "actor" \| "element";
		tag\?\: string \| VariableGetter;
		actor\?\: ActorGetter;
		element\?\: ElementGetter;
		operation\: "register" \| "unregister" \| "reset";
		type\?\: string;
		priority\?\: boolean;
		commands\?\: CommandDataList;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 4300 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4300)

```typescript
protected registerEvent({
		target,
		actor,
		element,
		operation,
		type,
		priority,
		tag,
		commands,
	}: {
		target: "global" | "actor" | "element";
		tag?: string | VariableGetter;
		actor?: ActorGetter;
		element?: ElementGetter;
		operation: "register" | "unregister" | "reset";
		type?: string;
		priority?: boolean;
		commands?: CommandDataList;
	}): CommandFunction {
		switch (target) {
			case "global":
				switch (operation) {
					case "register": {
						let getTag: () => string;
						if (tag) {
							getTag = Command.compileString(tag);
						} else {
							const tag = GUID.generate64bit();
							getTag = () => tag;
						}
						const commandList = Command.compileIndependent(commands!);
						commandList.type = type!;
						commandList.enabled = true;
						commandList.priority = priority ?? false;
						return () => {
							const copy = Object.create(commandList) as CommandFunctionList;
							copy.inheritance = CurrentEvent;
							EventManager.register(getTag(), type!, copy);
							return true;
						};
					}
					case "unregister": {
						const getTag = Command.compileString(tag!);
						return () => {
							EventManager.unregister(getTag());
							return true;
						};
					}
					case "reset":
						return () => {
							EventManager.unregisterAll();
							return true;
						};
				}
			case "actor":
				switch (operation) {
					case "register": {
						const getActor = Command.compileActor(actor!);
						const commandList = Command.compileIndependent(commands!);
						commandList.type = type!;
						return () => {
							const copy = Object.create(commandList) as CommandFunctionList;
							copy.inheritance = CurrentEvent;
							getActor()?.register(type!, copy);
							return true;
						};
					}
					case "unregister": {
						const getActor = Command.compileActor(actor!);
						return () => {
							getActor()?.unregister(type!);
							return true;
						};
					}
					case "reset": {
						const getActor = Command.compileActor(actor!);
						return () => {
							getActor()?.unregisterAll();
							return true;
						};
					}
				}
			case "element":
				switch (operation) {
					case "register": {
						const getElement = Command.compileElement(element!);
						const commandList = Command.compileIndependent(commands!);
						commandList.type = type!;
						return () => {
							const copy = Object.create(commandList) as CommandFunctionList;
							copy.inheritance = CurrentEvent;
							getElement()?.register(type!, copy);
							return true;
						};
					}
					case "unregister": {
						const getElement = Command.compileElement(element!);
						return () => {
							getElement()?.unregister(type!);
							return true;
						};
					}
					case "reset": {
						const getElement = Command.compileElement(element!);
						return () => {
							getElement()?.unregisterAll();
							return true;
						};
					}
				}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
