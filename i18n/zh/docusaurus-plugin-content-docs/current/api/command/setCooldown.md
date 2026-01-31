---
sidebar_position: 1
title: setCooldown 设置冷却时间
---

## setCooldown

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置冷却时间

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, operation, key, cooldown, \}` | `\{
		actor\: ActorGetter;
		operation\: "set" \| "increase" \| "decrease";
		key\: string \| VariableGetter;
		cooldown\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8108 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8108)

```typescript
protected setCooldown({
		actor,
		operation,
		key,
		cooldown,
	}: {
		actor: ActorGetter;
		operation: "set" | "increase" | "decrease";
		key: string | VariableGetter;
		cooldown: number | VariableGetter;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		const getKey = Command.compileEnumValue(key);
		const getCooldown = Command.compileNumber(cooldown);
		const methodName = {
			set: "setCooldown",
			increase: "increaseCooldown",
			decrease: "decreaseCooldown",
		}[operation] as "setCooldown" | "increaseCooldown" | "decreaseCooldown";
		return () => {
			getActor()?.cooldown[methodName](getKey(), getCooldown());
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
