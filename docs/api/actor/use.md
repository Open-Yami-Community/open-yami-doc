---
sidebar_position: 1
title: use 使用角色物品
---

## use

**类型**: `MethodDeclaration`

**所属类**: `Item`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

使用角色物品

参数 `actor`: 使用物品的角色

返回值:生成的事件处理器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `Actor \| undefined` | - | this.parent?.actor |

### 返回值

类型: `EventHandler \| undefined`

生成的事件处理器

### 源代码

**位置**: [第 4387 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4387)

```typescript
public use(
		actor: Actor | undefined = this.parent?.actor
	): EventHandler | undefined {
		// 如果数量大于0，则返回物品使用事件
		if (this.quantity > 0 && actor?.isActive()) {
			return this.emit("itemuse", actor);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
