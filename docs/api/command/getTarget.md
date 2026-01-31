---
sidebar_position: 1
title: getTarget 获取目标
---

## getTarget

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

获取目标

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, selector, condition, attribute, divisor, \}` | `\{
		actor\: ActorGetter;
		selector\: ActorSelector;
		condition\: string;
		attribute\?\: string;
		divisor\?\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7445 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7445)

```typescript
protected getTarget({
		actor,
		selector,
		condition,
		attribute,
		divisor,
	}: {
		actor: ActorGetter;
		selector: ActorSelector;
		condition: string;
		attribute?: string;
		divisor?: string;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		switch (condition) {
			case "max-threat":
				return () => {
					CurrentEvent.targetActor =
						getActor()?.target.getTargetMaxThreat(selector);
					return true;
				};
			case "nearest":
				return () => {
					CurrentEvent.targetActor =
						getActor()?.target.getTargetNearest(selector);
					return true;
				};
			case "farthest":
				return () => {
					CurrentEvent.targetActor =
						getActor()?.target.getTargetFarthest(selector);
					return true;
				};
			case "min-attribute-value": {
				const attributeKey = Attribute.getKey(attribute!);
				return () => {
					CurrentEvent.targetActor =
						getActor()?.target.getTargetMinAttributeValue(
							selector,
							attributeKey
						);
					return true;
				};
			}
			case "max-attribute-value": {
				const attributeKey = Attribute.getKey(attribute!);
				return () => {
					CurrentEvent.targetActor =
						getActor()?.target.getTargetMaxAttributeValue(
							selector,
							attributeKey
						);
					return true;
				};
			}
			case "min-attribute-ratio": {
				const attributeKey = Attribute.getKey(attribute!);
				const divisorKey = Attribute.getKey(divisor!);
				return () => {
					CurrentEvent.targetActor =
						getActor()?.target.getTargetMinAttributeRatio(
							selector,
							attributeKey,
							divisorKey
						);
					return true;
				};
			}
			case "max-attribute-ratio": {
				const attributeKey = Attribute.getKey(attribute!);
				const divisorKey = Attribute.getKey(divisor!);
				return () => {
					CurrentEvent.targetActor =
						getActor()?.target.getTargetMaxAttributeRatio(
							selector,
							attributeKey,
							divisorKey
						);
					return true;
				};
			}
			case "random":
				return () => {
					CurrentEvent.targetActor =
						getActor()?.target.getTargetRandom(selector);
					return true;
				};
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
