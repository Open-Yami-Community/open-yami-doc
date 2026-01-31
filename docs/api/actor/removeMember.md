---
sidebar_position: 1
title: removeMember 移除玩家队伍成员
---

## removeMember

**类型**: `MethodDeclaration`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

移除玩家队伍成员

参数 `actor`: 队伍成员

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `GlobalActor` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 46 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L46)

```typescript
public removeMember(actor: GlobalActor): void {
		if (actor instanceof GlobalActor) {
			if (this.members.remove(actor)) {
				this.version++;
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:57
