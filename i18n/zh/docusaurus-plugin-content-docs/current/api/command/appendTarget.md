---
sidebar_position: 1
title: appendTarget 添加目标
---

## appendTarget

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

添加目标

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, target, \}` | `\{
		actor\: ActorGetter;
		target\: ActorGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7537 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7537)

```typescript
protected appendTarget({
		actor,
		target,
	}: {
		actor: ActorGetter;
		target: ActorGetter;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		const getTarget = Command.compileActor(target);
		return () => {
			const target = getTarget();
			if (target && Scene.actor === target.parent && target.active) {
				getActor()?.target.append(target);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
