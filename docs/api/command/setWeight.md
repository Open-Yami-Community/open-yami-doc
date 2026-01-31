---
sidebar_position: 1
title: setWeight 设置体重
---

## setWeight

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置体重

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, weight, \}` | `\{
		actor\: ActorGetter;
		weight\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6555 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6555)

```typescript
protected setWeight({
		actor,
		weight,
	}: {
		actor: ActorGetter;
		weight: number | VariableGetter;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		const getWeight = Command.compileNumber(weight, 0, 0, 8);
		return () => {
			getActor()?.collider.setWeight(getWeight());
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
