---
sidebar_position: 1
title: fixAngle 固定角度
---

## fixAngle

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

固定角度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, fixed, \}` | `\{
		actor\: ActorGetter;
		fixed\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6640 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6640)

```typescript
protected fixAngle({
		actor,
		fixed,
	}: {
		actor: ActorGetter;
		fixed: boolean;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		return () => {
			const actor = getActor();
			if (actor) {
				actor.angleFixed = fixed;
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
