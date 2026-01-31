---
sidebar_position: 1
title: setInventory 设置库存
---

## setInventory

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置库存

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, operation, money, itemId, quantity, equipmentId, equipment, order1, order2, refActor, \}` | `\{
		actor\: ActorGetter;
		operation\: string;
		money\?\: number \| VariableGetter;
		itemId\?\: string \| VariableGetter;
		quantity\?\: number \| VariableGetter;
		equipmentId\?\: string \| VariableGetter;
		equipment\?\: EquipmentGetter;
		order1\: number \| VariableGetter;
		order2\: number \| VariableGetter;
		refActor\?\: ActorGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7892 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7892)

```typescript
protected setInventory({
		actor,
		operation,
		money,
		itemId,
		quantity,
		equipmentId,
		equipment,
		order1,
		order2,
		refActor,
	}: {
		actor: ActorGetter;
		operation: string;
		money?: number | VariableGetter;
		itemId?: string | VariableGetter;
		quantity?: number | VariableGetter;
		equipmentId?: string | VariableGetter;
		equipment?: EquipmentGetter;
		order1: number | VariableGetter;
		order2: number | VariableGetter;
		refActor?: ActorGetter;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		switch (operation) {
			case "increase-money": {
				const getMoney = Command.compileNumber(money!);
				return () => {
					getActor()?.inventory.increaseMoney(getMoney());
					return true;
				};
			}
			case "decrease-money": {
				const getMoney = Command.compileNumber(money!);
				return () => {
					getActor()?.inventory.decreaseMoney(getMoney());
					return true;
				};
			}
			case "increase-items": {
				const getId = Command.compileString(itemId!);
				const getQuantity = Command.compileNumber(quantity!);
				return () => {
					getActor()?.inventory.increaseItems(getId(), getQuantity());
					return true;
				};
			}
			case "decrease-items": {
				const getId = Command.compileString(itemId!);
				const getQuantity = Command.compileNumber(quantity!);
				return () => {
					getActor()?.inventory.decreaseItems(getId(), getQuantity());
					return true;
				};
			}
			case "gain-equipment": {
				const getId = Command.compileString(equipmentId!);
				return () => {
					getActor()?.inventory.createEquipment(getId());
					return true;
				};
			}
			case "lose-equipment": {
				const getId = Command.compileString(equipmentId!);
				return () => {
					getActor()?.inventory.deleteEquipment(getId());
					return true;
				};
			}
			case "gain-equipment-instance": {
				const getEquipment = Command.compileEquipment(equipment!);
				return () => {
					const equipment = getEquipment();
					if (equipment) {
						getActor()?.inventory.gainEquipment(equipment);
					}
					return true;
				};
			}
			case "lose-equipment-instance": {
				const getEquipment = Command.compileEquipment(equipment!);
				return () => {
					const equipment = getEquipment();
					if (equipment) {
						getActor()?.inventory.loseEquipment(equipment);
					}
					return true;
				};
			}
			case "swap": {
				const getOrder1 = Command.compileNumber(order1);
				const getOrder2 = Command.compileNumber(order2);
				return () => {
					getActor()?.inventory.swap(getOrder1(), getOrder2());
					return true;
				};
			}
			case "sort":
				return () => {
					getActor()?.inventory.sort(false);
					return true;
				};
			case "sort-by-order":
				return () => {
					getActor()?.inventory.sort(true);
					return true;
				};
			case "reference": {
				const getRefActor = Command.compileActor(refActor!);
				return () => {
					const sActor = getActor();
					const dActor = getRefActor();
					if (sActor && dActor instanceof GlobalActor) {
						sActor.useInventory(dActor.inventory);
					}
					return true;
				};
			}
			case "dereference":
				return () => {
					getActor()?.restoreInventory();
					return true;
				};
			case "reset":
				return () => {
					getActor()?.inventory.reset();
					return true;
				};
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
