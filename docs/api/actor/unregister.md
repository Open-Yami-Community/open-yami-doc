---
sidebar_position: 1
title: unregister 取消注册事件指令
---

## unregister

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

取消注册事件指令

参数 `type`: 事件类型

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1221 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1221)

```typescript
public unregister(type: string): void {
		const commands = this.registeredEvents[type];
		if (commands) {
			this.stopEvents(commands);
			delete this.registeredEvents[type];
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
