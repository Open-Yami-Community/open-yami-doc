---
sidebar_position: 1
title: setActive 设置激活状态
---

## setActive

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置激活状态

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, active, \}` | `\{
		actor\: ActorGetter;
		active\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6658 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6658)

```typescript
protected setActive({
		actor,
		active,
	}: {
		actor: ActorGetter;
		active: boolean;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		return () => {
			getActor()?.setActive(active);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
