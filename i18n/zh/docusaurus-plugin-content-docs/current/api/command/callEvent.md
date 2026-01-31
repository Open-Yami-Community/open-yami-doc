---
sidebar_position: 1
title: callEvent 调用事件
---

## callEvent

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

调用事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ type, actor, skill, state, equipment, item, light, element, eventId, eventArgs, eventResult, eventType, \}` | `\{
		type\:
			\| "global"
			\| "inherited"
			\| "scene"
			\| "actor"
			\| "skill"
			\| "state"
			\| "equipment"
			\| "item"
			\| "light"
			\| "element";
		actor\?\: ActorGetter;
		skill\?\: SkillGetter;
		state\?\: StateGetter;
		equipment\?\: EquipmentGetter;
		item\?\: ItemGetter;
		light\?\: LightGetter;
		element\?\: ElementGetter;
		eventId\?\: string;
		eventArgs\?\: Array&lt;GlobalEventArgument&gt;;
		eventResult\?\: GlobalEventResultSetter;
		eventType\?\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction \| Array&lt;CommandFunction&gt;`

### 源代码

**位置**: [第 4019 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4019)

```typescript
protected callEvent({
		type,
		actor,
		skill,
		state,
		equipment,
		item,
		light,
		element,
		eventId,
		eventArgs,
		eventResult,
		eventType,
	}: {
		type:
			| "global"
			| "inherited"
			| "scene"
			| "actor"
			| "skill"
			| "state"
			| "equipment"
			| "item"
			| "light"
			| "element";
		actor?: ActorGetter;
		skill?: SkillGetter;
		state?: StateGetter;
		equipment?: EquipmentGetter;
		item?: ItemGetter;
		light?: LightGetter;
		element?: ElementGetter;
		eventId?: string;
		eventArgs?: Array<GlobalEventArgument>;
		eventResult?: GlobalEventResultSetter;
		eventType?: string;
	}): CommandFunction | Array<CommandFunction> {
		switch (type) {
			case "global": {
				// 补丁：2025-2-22
				if (eventArgs === undefined) {
					eventArgs = [];
				}
				if (eventResult === undefined) {
					eventResult = { type: "none", variable: undefined };
				}
				const fn = () => {
					const commands = EventManager.guidMap[eventId!];
					let fn1: CommandFunction = Command.skip;
					let fn2: CommandFunction = Command.skip;
					if (commands) {
						const wrap = commands.namespace
							? Command.compileCommandTupleInNamespace(commands)
							: Command.compileCommandTuple(commands);
						fn1 = wrap[0];
						fn2 = wrap[1];
						const { getArguments, setArguments } =
							Command.compileArgumentAccessors(
								eventArgs!,
								commands.parameters!
							);
						const { getReturnValue, setReturnValue } =
							Command.compileReturnValueAccessors(
								eventResult!,
								commands.returnType!
							);
						if (getArguments !== Function.empty) {
							const callEvent = fn1;
							fn1 = () => {
								getArguments();
								callEvent();
								setArguments();
								return true;
							};
						}
						if (getReturnValue !== Function.empty) {
							const handleReturn = fn2;
							fn2 = () => {
								getReturnValue();
								handleReturn();
								setReturnValue();
								return true;
							};
						}
					}
					CommandList[CommandIndex - 1] = fn1;
					CommandList[CommandIndex] = fn2;
					// 编译时不能确定事件已加载，因此使用运行时编译
					return fn1();
				};
				return [fn, Command.skip];
			}
			case "inherited":
				return Command.compileInheritedCommandTuple();
			case "scene": {
				const type = Enum.getValue(eventType!) || eventType;
				return () => {
					Scene.binding?.callEvent(type!);
					return true;
				};
			}
			case "actor": {
				const getActor = Command.compileActor(actor!);
				const type = Enum.getValue(eventType!) || eventType;
				return () => (getActor()?.callEvent(type!), true);
			}
			case "skill": {
				const getSkill = Command.compileSkill(skill!);
				const type = Enum.getValue(eventType!) || eventType;
				return () => (getSkill()?.callEvent(type!), true);
			}
			case "state": {
				const getState = Command.compileState(state!);
				const type = Enum.getValue(eventType!) || eventType;
				return () => (getState()?.callEvent(type!), true);
			}
			case "equipment": {
				const getEquipment = Command.compileEquipment(equipment!);
				const type = Enum.getValue(eventType!) || eventType;
				return () => (getEquipment()?.callEvent(type!), true);
			}
			case "item": {
				const getItem = Command.compileItem(item!);
				const type = Enum.getValue(eventType!) || eventType;
				return () => (getItem()?.callEvent(type!), true);
			}
			case "light": {
				const getLight = Command.compileLight(light!);
				const type = Enum.getValue(eventType!) || eventType;
				return () => (getLight()?.callEvent(type!), true);
			}
			case "element": {
				const getElement = Command.compileElement(element!);
				const type = Enum.getValue(eventType!) || eventType;
				return () => (getElement()?.callEvent(type!), true);
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
