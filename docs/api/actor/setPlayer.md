---
sidebar_position: 1
title: setPlayer 设置玩家角色
---

## setPlayer

**类型**: `MethodDeclaration`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置玩家角色

参数 `actor`: 玩家角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `GlobalActor \| null` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 21 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L21)

```typescript
public setPlayer(actor: GlobalActor | null): void {
		if (actor instanceof GlobalActor && !actor.destroyed) {
			this.player = actor;
		}
		if (actor === null) {
			this.player = null;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:57
