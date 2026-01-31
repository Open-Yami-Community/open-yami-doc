---
sidebar_position: 1
title: equip 穿上角色装备(共享库存的代价：需要传递事件触发角色)
---

## equip

**类型**: `MethodDeclaration`

**所属类**: `Equipment`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

穿上角色装备(共享库存的代价：需要传递事件触发角色)

参数 `slot`: 装备槽

参数 `actor`: 事件触发角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `slot` | `string` | - | - |
| `actor` | `Actor \| undefined` | - | this.parent?.actor |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4267 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4267)

```typescript
public equip(
		slot: string,
		actor: Actor | undefined = this.parent?.actor
	): void {
		if (this.parent instanceof Inventory) {
			actor?.equipment.set(slot, this);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
