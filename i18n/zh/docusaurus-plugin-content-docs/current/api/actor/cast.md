---
sidebar_position: 1
title: cast 施放角色技能
---

## cast

**类型**: `MethodDeclaration`

**所属类**: `Skill`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

施放角色技能

参数 `target`: 目标角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `target` | `Actor` | - | - |

### 返回值

类型: `EventHandler \| undefined`

### 源代码

**位置**: [第 3642 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3642)

```typescript
public cast(target?: Actor): EventHandler | undefined {
		// 如果冷却结束且施放角色已激活，返回技能释放事件
		if (this.cooldown === 0 && this.parent?.actor.isActive()) {
			this.target = target ?? null;
			const event = this.emit("skillcast");
			this.target = null;
			return event;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
