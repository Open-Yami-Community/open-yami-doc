---
sidebar_position: 1
title: stopActiveEventsByType 停止正在执行的对象事件(通过类型)
---

## stopActiveEventsByType

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

停止正在执行的对象事件(通过类型)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `updaters` | `UpdaterList \| undefined` | - | - |
| `type` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4159 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4159)

```typescript
private stopActiveEventsByType(
		updaters: UpdaterList | undefined,
		type: string
	): void {
		if (updaters === undefined) return;
		for (const updater of updaters) {
			if (updater instanceof EventHandler && updater.type === type) {
				updater.finish();
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
