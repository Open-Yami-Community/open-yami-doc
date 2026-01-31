---
sidebar_position: 1
title: gainEquipment 添加装备实例到库存
---

## gainEquipment

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

添加装备实例到库存

参数 `equipment`: 装备实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `equipment` | `Equipment` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4833 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4833)

```typescript
public gainEquipment(equipment: Equipment): void {
		if (equipment.parent !== this) {
			equipment.remove();
			this.insert(equipment);
			equipment.callEvent("equipmentgain");
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
