---
sidebar_position: 1
title: changeActorEquipment 改变角色装备
---

## changeActorEquipment

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

改变角色装备

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, operation, slot, equipmentId, equipment, \}` | `\{
		actor\: ActorGetter;
		operation\:
			\| "add"
			\| "remove"
			\| "add\-instance"
			\| "remove\-instance"
			\| "remove\-slot";
		slot\: string \| VariableGetter;
		equipmentId\?\: string;
		equipment\?\: EquipmentGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 6983 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6983)

```typescript
protected changeActorEquipment({
		actor,
		operation,
		slot,
		equipmentId,
		equipment,
	}: {
		actor: ActorGetter;
		operation:
			| "add"
			| "remove"
			| "add-instance"
			| "remove-instance"
			| "remove-slot";
		slot: string | VariableGetter;
		equipmentId?: string;
		equipment?: EquipmentGetter;
	}): CommandFunction | null {
		const getActor = Command.compileActor(actor);
		switch (operation) {
			case "add": {
				const equipmentData = Data.equipments[equipmentId!];
				const getSlot = Command.compileEnumValue(slot);
				return !equipmentData
					? null
					: () => {
							getActor()?.equipment.set(
								getSlot(),
								new Equipment(equipmentData)
							);
							return true;
					  };
			}
			case "remove":
				return () => {
					const actor = getActor();
					if (actor) {
						const equipment = actor.equipment.getById(equipmentId!);
						if (equipment) actor.equipment.remove(equipment);
					}
					return true;
				};
			case "add-instance": {
				const getEquipment = Command.compileEquipment(equipment!);
				const getSlot = Command.compileEnumValue(slot);
				return () => {
					const equipment = getEquipment();
					if (equipment) {
						getActor()?.equipment.set(getSlot(), equipment);
					}
					return true;
				};
			}
			case "remove-instance": {
				const getEquipment = Command.compileEquipment(equipment!);
				return () => {
					const equipment = getEquipment();
					if (equipment) {
						getActor()?.equipment.remove(equipment);
					}
					return true;
				};
			}
			case "remove-slot": {
				const getSlot = Command.compileEnumValue(slot);
				return () => {
					getActor()?.equipment.delete(getSlot());
					return true;
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
