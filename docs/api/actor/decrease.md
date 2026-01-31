---
sidebar_position: 1
title: decrease 减少物品的数量，当物品数量不够时将被从库存中移除
---

## decrease

**类型**: `MethodDeclaration`

**所属类**: `Item`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

减少物品的数量，当物品数量不够时将被从库存中移除

参数 `quantity`: 物品数量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `quantity` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4412 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4412)

```typescript
public decrease(quantity: number): void {
		const { parent } = this;
		if (parent && quantity > 0) {
			this.quantity -= quantity;
			// 如果物品数量不足，则移除
			if (this.quantity <= 0) {
				this.quantity = 0;
				this.remove();
				// 当数量减少到零时默认已销毁
				// 标记父对象兼容StopEvent指令
				this.parent = parent;
			}
			parent.version++;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
