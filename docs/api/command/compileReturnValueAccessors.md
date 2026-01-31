---
sidebar_position: 1
title: compileReturnValueAccessors 编译事件返回值访问器
---

## compileReturnValueAccessors

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译事件返回值访问器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `eventResult` | `GlobalEventResultSetter` | - | - |
| `returnType` | `GlobalEventReturnType` | - | - |

### 返回值

类型: `\{
		getReturnValue\: CallbackFunction;
		setReturnValue\: CallbackFunction;
	\}`

### 源代码

**位置**: [第 3717 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L3717)

```typescript
private compileReturnValueAccessors(
		eventResult: GlobalEventResultSetter,
		returnType: GlobalEventReturnType
	): {
		getReturnValue: CallbackFunction;
		setReturnValue: CallbackFunction;
	} {
		let getReturnValue = Function.empty;
		let setReturnValue = Function.empty;
		// 如果返回值类型无效
		if (eventResult.type !== returnType) {
			return { getReturnValue, setReturnValue };
		}
		let result: any;
		// 编译读取返回值方法
		switch (eventResult.type) {
			case "none":
				break;
			default: {
				const returnKey = this.returnKey;
				getReturnValue = () => {
					result = (CurrentEvent.attributes as any)[returnKey];
				};
				break;
			}
		}
		// 编译写入返回值方法
		switch (eventResult.type) {
			case "none":
				break;
			case "boolean": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.BOOLEAN_SET
				);
				setReturnValue = () => {
					if (typeof result === "boolean") setter(result);
				};
				break;
			}
			case "number": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.NUMBER_SET
				);
				setReturnValue = () => {
					if (Number.isFinite(result)) setter(result);
				};
				break;
			}
			case "string": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.STRING_SET
				);
				setReturnValue = () => {
					if (typeof result === "string") setter(result);
				};
				break;
			}
			case "object": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.OBJECT_SET
				);
				setReturnValue = () => {
					if (typeof result === "object" || result === undefined)
						setter(result);
				};
				break;
			}
			case "actor": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.OBJECT_SET
				);
				setReturnValue = () => {
					if (result instanceof Actor || result === undefined) setter(result);
				};
				break;
			}
			case "skill": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.OBJECT_SET
				);
				setReturnValue = () => {
					if (result instanceof Skill || result === undefined) setter(result);
				};
				break;
			}
			case "state": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.OBJECT_SET
				);
				setReturnValue = () => {
					if (result instanceof State || result === undefined) setter(result);
				};
				break;
			}
			case "equipment": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.OBJECT_SET
				);
				setReturnValue = () => {
					if (result instanceof Equipment || result === undefined)
						setter(result);
				};
				break;
			}
			case "item": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.OBJECT_SET
				);
				setReturnValue = () => {
					if (result instanceof Item || result === undefined) setter(result);
				};
				break;
			}
			case "trigger": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.OBJECT_SET
				);
				setReturnValue = () => {
					if (result instanceof Trigger || result === undefined) setter(result);
				};
				break;
			}
			case "light": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.OBJECT_SET
				);
				setReturnValue = () => {
					if (result instanceof SceneLight || result === undefined)
						setter(result);
				};
				break;
			}
			case "element": {
				const setter = Command.compileVariable(
					eventResult.variable,
					Attribute.OBJECT_SET
				);
				setReturnValue = () => {
					if (result instanceof UIElement || result === undefined)
						setter(result);
				};
				break;
			}
		}
		return { getReturnValue, setReturnValue };
	}
```

---



文档生成时间：2026/1/31 13:13:58
