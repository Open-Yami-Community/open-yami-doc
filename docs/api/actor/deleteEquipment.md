---
sidebar_position: 1
title: deleteEquipment 从库存中删除装备实例(通过文件ID)
---

## deleteEquipment

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

从库存中删除装备实例(通过文件ID)

参数 `id`: 装备文件ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4822 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4822)

```typescript
public deleteEquipment(id: string): void {
		const equipment = this.get(id);
		if (equipment instanceof Equipment) {
			this.loseEquipment(equipment);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
