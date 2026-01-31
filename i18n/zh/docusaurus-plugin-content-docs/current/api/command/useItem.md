---
sidebar_position: 1
title: useItem 使用物品
---

## useItem

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

使用物品

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, mode, key, itemId, item, wait, \}` | `\{
		actor\: ActorGetter;
		mode\: string;
		key\?\: string;
		itemId\?\: string;
		item\?\: ItemGetter;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8025 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8025)

```typescript
protected useItem({
		actor,
		mode,
		key,
		itemId,
		item,
		wait,
	}: {
		actor: ActorGetter;
		mode: string;
		key?: string;
		itemId?: string;
		item?: ItemGetter;
		wait: boolean;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		let getItem: () => Item | undefined;
		switch (mode) {
			case "by-key": {
				const shortcutKey = Enum.getValue(key!);
				getItem = () => getActor()?.shortcut.getItem(shortcutKey);
				break;
			}
			case "by-id":
				getItem = () => getActor()?.inventory.get(itemId!) as Item | undefined;
				break;
			case "by-item": {
				const getInstance = Command.compileItem(item!);
				getItem = () => {
					const actor = getActor();
					const item = getInstance();
					if (actor && item && actor.inventory === item.parent) {
						return item;
					}
				};
				break;
			}
		}
		switch (wait) {
			case false:
				return () => {
					getItem()?.use(getActor());
					return true;
				};
			case true:
				return () => {
					const using = getItem()?.use(getActor());
					if (using && !using.complete) {
						const event = CurrentEvent;
						using.onFinish(() => {
							event.continue();
						});
						return CurrentEvent.pause();
					}
					return true;
				};
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
