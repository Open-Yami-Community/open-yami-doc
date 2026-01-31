---
sidebar_position: 1
title: emit 调用物品事件和脚本
---

## emit

**类型**: `MethodDeclaration`

**所属类**: `Item`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

调用物品事件和脚本

参数 `type`: 物品事件类型

参数 `actor`: 事件触发角色

返回值:生成的事件处理器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `actor` | `Actor` | - | - |

### 返回值

类型: `EventHandler \| undefined`

生成的事件处理器

### 源代码

**位置**: [第 4469 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4469)

```typescript
public emit(type: string, actor?: Actor): EventHandler | undefined {
		const event = this.callEvent(type, actor);
		this.script.emit(type, this);
		return event;
	}
```

---



文档生成时间：2026/1/31 13:13:58
