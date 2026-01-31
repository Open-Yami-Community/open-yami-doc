---
sidebar_position: 1
title: stopEvent 停止事件
---

## stopEvent

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

停止事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ type, actor, skill, state, equipment, item, light, element, eventId, eventType, \}` | `\{
		type\:
			\| "current"
			\| "global"
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
		eventType\?\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction \| Array&lt;CommandFunction&gt;`

### 源代码

**位置**: [第 4172 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4172)

```typescript
protected stopEvent({
		type,
		actor,
		skill,
		state,
		equipment,
		item,
		light,
		element,
		eventId,
		eventType,
	}: {
		type:
			| "current"
			| "global"
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
		eventType?: string;
	}): CommandFunction | Array<CommandFunction> {
		// 补丁：2025-2-27
		if (type === undefined) {
			type = "current";
		}
		switch (type) {
			case "current":
				return () => (CurrentEvent.finish(), false);
			case "global":
				return () => {
					const commands = EventManager.guidMap[eventId!];
					const fn = !commands
						? Command.skip
						: () => {
								EventManager.stopEvents(commands);
								return true;
						  };
					// 编译时不能确定事件已加载，因此使用运行时编译
					return (CommandList[CommandIndex - 1] = fn)();
				};
			case "scene": {
				const type = Enum.getValue(eventType!) || eventType!;
				return () => {
					Command.stopActiveEventsByType(Scene.binding?.updaters, type);
					return true;
				};
			}
			case "actor": {
				const getActor = Command.compileActor(actor!);
				const type = Enum.getValue(eventType!) || eventType!;
				return () => {
					Command.stopActiveEventsByType(getActor()?.updaters, type);
					return true;
				};
			}
			case "skill": {
				const getSkill = Command.compileSkill(skill!);
				const type = Enum.getValue(eventType!) || eventType!;
				return () => {
					Command.stopActiveEventsByType(
						getSkill()?.parent?.actor.updaters,
						type
					);
					return true;
				};
			}
			case "state": {
				const getState = Command.compileState(state!);
				const type = Enum.getValue(eventType!) || eventType!;
				return () => {
					Command.stopActiveEventsByType(getState()?.updaters, type);
					return true;
				};
			}
			case "equipment": {
				const getEquipment = Command.compileEquipment(equipment!);
				const type = Enum.getValue(eventType!) || eventType!;
				return () => {
					Command.stopActiveEventsByType(
						getEquipment()?.parent?.actor.updaters,
						type
					);
					return true;
				};
			}
			case "item": {
				const getItem = Command.compileItem(item!);
				const type = Enum.getValue(eventType!) || eventType!;
				return () => {
					Command.stopActiveEventsByType(
						getItem()?.parent?.actor.updaters,
						type
					);
					return true;
				};
			}
			case "light": {
				const getLight = Command.compileLight(light!);
				const type = Enum.getValue(eventType!) || eventType!;
				return () => {
					Command.stopActiveEventsByType(getLight()?.updaters, type);
					return true;
				};
			}
			case "element": {
				const getElement = Command.compileElement(element!);
				const type = Enum.getValue(eventType!) || eventType!;
				return () => {
					Command.stopActiveEventsByType(getElement()?.updaters, type);
					return true;
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
