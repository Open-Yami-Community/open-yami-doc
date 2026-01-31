---
sidebar_position: 1
title: setMovementSpeed 设置移动速度
---

## setMovementSpeed

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置移动速度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, property, base, factor, \}` | `\{
		actor\: ActorGetter;
		property\: "base" \| "factor" \| "factor\-temp";
		base\?\: number \| VariableGetter;
		factor\?\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6571 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6571)

```typescript
protected setMovementSpeed({
		actor,
		property,
		base,
		factor,
	}: {
		actor: ActorGetter;
		property: "base" | "factor" | "factor-temp";
		base?: number | VariableGetter;
		factor?: number | VariableGetter;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		switch (property) {
			case "base": {
				const getBase = Command.compileNumber(base!, 0, 0, 32);
				return () => {
					getActor()?.navigator.setMovementSpeed(getBase());
					return true;
				};
			}
			case "factor": {
				const getFactor = Command.compileNumber(factor!, 0, 0, 4);
				return () => {
					getActor()?.navigator.setMovementFactor(getFactor());
					return true;
				};
			}
			case "factor-temp": {
				const getFactor = Command.compileNumber(factor!, 0, 0, 4);
				return () => {
					getActor()?.navigator.setMovementFactorTemp(getFactor());
					return true;
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
