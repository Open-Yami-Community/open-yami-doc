---
sidebar_position: 1
title: getById 通过ID获取装备
---

## getById

**类型**: `MethodDeclaration`

**所属类**: `EquipmentManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

通过ID获取装备

参数 `equipmentId`: 装备文件ID

返回值:装备实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `equipmentId` | `string` | - | - |

### 返回值

类型: `Equipment \| undefined`

装备实例

### 源代码

**位置**: [第 4170 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4170)

```typescript
public getById(equipmentId: string): Equipment | undefined {
		for (const equipment of Object.values(this.slotMap) as Array<Equipment>) {
			if (equipment.id === equipmentId) return equipment;
		}
		return undefined;
	}
```

---



文档生成时间：2026/1/31 13:13:58
