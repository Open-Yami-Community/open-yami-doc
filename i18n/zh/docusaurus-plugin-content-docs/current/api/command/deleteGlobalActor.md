---
sidebar_position: 1
title: deleteGlobalActor 删除全局角色
---

## deleteGlobalActor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

删除全局角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actorId, \}` | `\{
		actorId\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7424 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7424)

```typescript
protected deleteGlobalActor({
		actorId,
	}: {
		actorId: string;
	}): CommandFunction {
		return () => {
			ActorManager.delete(actorId);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
