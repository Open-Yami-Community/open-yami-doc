---
sidebar_position: 1
title: getInheritedCommandList2 获取继承的角色或元素的事件指令列表
---

## getInheritedCommandList2

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

获取继承的角色或元素的事件指令列表

参数 `event`: 事件处理器

返回值:事件指令列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `object` | `Actor \| UIElement` | - | - |

### 返回值

类型: `CommandFunctionList \| undefined`

事件指令列表

### 源代码

**位置**: [第 3915 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L3915)

```typescript
private getInheritedCommandList2(
		object: Actor | UIElement
	): CommandFunctionList | undefined {
		let override: CommandFunctionList;
		const event: any = CurrentEvent;
		const array = event[Command.inheritKey];
		if (array && array.length > 0) {
			override = array[array.length - 1];
		} else {
			override = CurrentEvent.initial;
		}
		const found = object.registeredEvents[override.type] === override;
		return this.getInheritedCommandList(object, found);
	}
```

---



文档生成时间：2026/1/31 13:13:58
