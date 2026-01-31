---
sidebar_position: 1
title: callEvent 调用物品事件(共享库存的代价：需要传递事件触发角色)
---

## callEvent

**类型**: `MethodDeclaration`

**所属类**: `Item`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

调用物品事件(共享库存的代价：需要传递事件触发角色)

参数 `type`: 物品事件类型

参数 `actor`: 事件触发角色

返回值:生成的事件处理器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `actor` | `Actor \| undefined` | - | this.parent?.actor |

### 返回值

类型: `EventHandler \| undefined`

生成的事件处理器

### 源代码

**位置**: [第 4439 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4439)

```typescript
public callEvent(
		type: string,
		actor: Actor | undefined = this.parent?.actor
	): EventHandler | undefined {
		const commands = this.events[type];
		if (type === "itemgain") {
			EventManager.emit(type, {
				argument: {},
				properties: {
					triggerActor: actor,
					triggerItem: this,
				},
			});
		}
		if (commands) {
			const event = new EventHandler(commands);
			event.parent = this;
			event.triggerActor = actor;
			event.triggerItem = this;
			EventHandler.call(event, actor?.updaters);
			return event;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
