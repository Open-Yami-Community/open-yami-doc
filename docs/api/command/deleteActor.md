---
sidebar_position: 1
title: deleteActor 删除角色
---

## deleteActor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

删除角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor \}` | `\{ actor\: ActorGetter \}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6853 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6853)

```typescript
protected deleteActor({ actor }: { actor: ActorGetter }): CommandFunction {
		const getActor = Command.compileActor(actor);
		return () => {
			getActor()?.destroyAsync();
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
