---
sidebar_position: 1
title: createEquipment 在库存中创建装备实例(通过文件ID)
---

## createEquipment

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

在库存中创建装备实例(通过文件ID)

参数 `id`: 装备文件ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4811 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4811)

```typescript
public createEquipment(id: string): void {
		const data = Data.equipments[id];
		if (data) {
			this.gainEquipment(new Equipment(data));
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
