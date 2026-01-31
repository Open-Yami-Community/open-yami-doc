---
sidebar_position: 1
title: setAnimation 设置动画
---

## setAnimation

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置动画

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ element, properties, \}` | `\{
		element\: ElementGetter;
		properties\: Array&lt;\{ key\: string; value\: any \}&gt;;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 5237 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5237)

```typescript
protected setAnimation({
		element,
		properties,
	}: {
		element: ElementGetter;
		properties: Array<{ key: string; value: any }>;
	}): CommandFunction {
		const getElement = Command.compileElement(element);
		for (const property of properties) {
			switch (property.key) {
				case "animation-from-actor":
					property.value = Command.compileActor(property.value);
					continue;
				case "motion":
					property.value = Enum.getValue(property.value);
					continue;
				case "angle":
				case "frame":
					if (typeof property.value === "object") {
						property.value = Command.compileNumber(property.value, 0, 0, 10000);
					}
					continue;
			}
		}
		return () => {
			const element = getElement();
			if (element instanceof AnimationElement) {
				for (let { key, value } of properties) {
					switch (key) {
						case "animation-from-actor": {
							const actor = value();
							if (actor instanceof Actor) {
								element.loadActorAnimation(actor);
							}
							continue;
						}
						default:
							if (typeof value === "function") {
								value = value();
							}
							// @ts-ignore
							element[key] = value;
							continue;
					}
				}
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
