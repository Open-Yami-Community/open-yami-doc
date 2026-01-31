---
sidebar_position: 1
title: reference 恢复库存引用
---

## reference

**类型**: `MethodDeclaration`

**所属类**: `Inventory`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

恢复库存引用

### 返回值

类型: `void`

### 源代码

**位置**: [第 4930 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4930)

```typescript
public static reference(): void {
		for (const { actor, ref } of this.references) {
			const target = ActorManager.get(ref);
			if (target instanceof GlobalActor) {
				actor.useInventory(target.inventory);
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
