---
sidebar_position: 1
title: getInheritedCommandList 获取继承的事件指令列表
---

## getInheritedCommandList

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

获取继承的事件指令列表

参数 `event`: 事件处理器

返回值:事件指令列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `object` | `Actor \| Skill \| Trigger \| Item \| Equipment \| State \| UIElement` | - | - |
| `found` | `boolean` | - | false |

### 返回值

类型: `CommandFunctionList \| undefined`

事件指令列表

### 源代码

**位置**: [第 3880 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L3880)

```typescript
private getInheritedCommandList(
		object: Actor | Skill | Trigger | Item | Equipment | State | UIElement,
		found: boolean = false
	): CommandFunctionList | undefined {
		let override: CommandFunctionList;
		const event: any = CurrentEvent;
		const array = event[Command.inheritKey];
		if (array && array.length > 0) {
			override = array[array.length - 1];
		} else {
			override = CurrentEvent.initial;
		}
		const type = override.type;
		let events = object.events;
		do {
			if (found) {
				// 已找到重载函数的情况下
				// 开始查找虚函数并调用
				const virtual = events[type];
				if (virtual !== undefined && virtual !== override) {
					return virtual;
				}
			} else if (events[type] === override) {
				found = true;
			}
			events = Object.getPrototypeOf(events);
		} while (events !== Object.prototype);
		return undefined;
	}
```

---



文档生成时间：2026/1/31 13:13:58
