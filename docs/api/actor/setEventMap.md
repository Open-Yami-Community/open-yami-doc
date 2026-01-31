---
sidebar_position: 1
title: setEventMap 设置事件映射表
---

## setEventMap

**类型**: `MethodDeclaration`

**所属类**: `GlobalActor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置事件映射表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `map` | `HashMap&lt;CommandFunctionList&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1470 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1470)

```typescript
public setEventMap(map: HashMap<CommandFunctionList>): void {
		for (const updater of this.updaters) {
			if (
				updater instanceof EventHandler &&
				((GlobalActor.localEventKey in updater) as any)
			) {
				updater.finish();
			}
		}
		const oldAutorun = this.registeredEvents.autorun ?? this.events.autorun;
		const newAutorun = this.registeredEvents.autorun ?? map.autorun;
		if (oldAutorun !== newAutorun) this.started = false;
		this.events = map;
	}
```

---



文档生成时间：2026/1/31 13:13:58
