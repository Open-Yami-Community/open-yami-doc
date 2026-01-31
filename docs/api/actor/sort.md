---
sidebar_position: 1
title: sort 排序库存中的对象
---

## sort

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

排序库存中的对象

参数 `byOrder`: 如果设置为true，则按文件名排序，物品优先于装备

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `byOrder` | `boolean` | - | false |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4687 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4687)

```typescript
public sort(byOrder: boolean = false): void {
		const { list } = this;
		const { length } = list;
		// 如果通过文件名排序
		if (byOrder)
			list.sort((a: Item | Equipment, b: Item | Equipment) => {
				const typeA = a instanceof Item ? "item" : "equipment";
				const typeB = b instanceof Item ? "item" : "equipment";
				// 物品优先于装备，然后再比较文件名
				if (typeA !== typeB) {
					return typeA === "item" ? -1 : 1;
				}
				return a.data.filename.localeCompare(b.data.filename);
			});
		// 遍历物品列表，更新索引
		for (let i = 0; i < length; i++) {
			list[i].order = i;
		}
		this.pointer = length;
		this.version++;
	}
```

---



文档生成时间：2026/1/31 13:13:58
