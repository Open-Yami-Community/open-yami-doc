---
sidebar_position: 1
title: loseEquipment 从库存中移除装备实例
---

## loseEquipment

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

从库存中移除装备实例

参数 `equipment`: 装备实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `equipment` | `Equipment` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4845 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4845)

```typescript
public loseEquipment(equipment: Equipment): void {
		if (equipment.parent === this) {
			this.remove(equipment);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
