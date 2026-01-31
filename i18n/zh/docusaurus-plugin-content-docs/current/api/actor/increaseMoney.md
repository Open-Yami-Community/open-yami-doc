---
sidebar_position: 1
title: increaseMoney 增加库存中的金钱
---

## increaseMoney

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

增加库存中的金钱

参数 `money`: 金钱数量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `money` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4729 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4729)

```typescript
public increaseMoney(money: number): void {
		this.money += Math.max(money, 0);
		Inventory.moneyIncrement = money;
		EventManager.emit("moneygain", {
			argument: {},
			properties: {
				triggerActor: this.actor,
			},
		});
	}
```

---



文档生成时间：2026/1/31 13:13:58
