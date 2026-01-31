---
sidebar_position: 1
title: loadEquipments 加载初始角色装备
---

## loadEquipments

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

加载初始角色装备

### 返回值

类型: `void`

### 源代码

**位置**: [第 630 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L630)

```typescript
private loadEquipments(): void {
		const { equipment: equipmentManager } = this;
		const dataMap = Data.equipments;
		const equipments = this.data.equipments;
		const length = equipments.length;
		// 创建初始装备并设置快捷键
		for (let i = 0; i < length; i++) {
			const equipment = equipments[i];
			const data = dataMap[equipment.id];
			const slot = Enum.get(equipment.slot);
			if (
				data !== undefined &&
				slot !== undefined &&
				equipmentManager.get(slot.value) === undefined
			) {
				equipmentManager.set(slot.value, new Equipment(data));
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:57
