---
sidebar_position: 1
title: changePassableTerrain 改变通行区域
---

## changePassableTerrain

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

改变通行区域

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, passage, \}` | `\{
		actor\: ActorGetter;
		passage\: keyof ActorPassageMap;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6903 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6903)

```typescript
protected changePassableTerrain({
		actor,
		passage,
	}: {
		actor: ActorGetter;
		passage: keyof ActorPassageMap;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		return () => {
			getActor()?.setPassage(passage);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
