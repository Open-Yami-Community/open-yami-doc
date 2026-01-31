---
sidebar_position: 1
title: increase 增加物品的数量
---

## increase

**类型**: `MethodDeclaration`

**所属类**: `Item`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

增加物品的数量

参数 `quantity`: 物品数量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `quantity` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4400 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4400)

```typescript
public increase(quantity: number): void {
		const { parent } = this;
		if (parent && quantity > 0) {
			this.quantity += quantity;
			parent.version++;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
