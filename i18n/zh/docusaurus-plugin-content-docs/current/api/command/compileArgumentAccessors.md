---
sidebar_position: 1
title: compileArgumentAccessors 编译事件参数访问器
---

## compileArgumentAccessors

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译事件参数访问器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `eventArgs` | `Array&lt;GlobalEventArgument&gt;` | - | - |
| `eventParams` | `Array&lt;GlobalEventParameter&gt;` | - | - |

### 返回值

类型: `\{
		getArguments\: CallbackFunction;
		setArguments\: CallbackFunction;
	\}`

### 源代码

**位置**: [第 3501 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L3501)

```typescript
private compileArgumentAccessors(
		eventArgs: Array<GlobalEventArgument>,
		eventParams: Array<GlobalEventParameter>
	): {
		getArguments: CallbackFunction;
		setArguments: CallbackFunction;
	} {
		// 编译每个参数写入和读取器
		const flags: HashMap<true> = {};
		const getters: Array<() => void> = [];
		const setters: Array<(value: any) => void> = [];
		outer: for (const { type, key } of eventParams!) {
			for (const arg of eventArgs!) {
				if (arg.key === key && arg.type === type) {
					if (key in flags) {
						continue;
					}
					flags[key] = true;
					const variable: VariableGetter = { type: "local", key: key };
					const value = arg.value;
					switch (type) {
						case "boolean":
							getters.push(() => value as boolean);
							setters.push(
								Command.compileVariable(variable, Attribute.BOOLEAN_SET)
							);
							break;
						case "number":
							getters.push(
								Command.compileNumber(value as number | VariableGetter)
							);
							setters.push(
								Command.compileVariable(variable, Attribute.NUMBER_SET)
							);
							break;
						case "string":
							getters.push(
								Command.compileString(value as string | VariableGetter)
							);
							setters.push(
								Command.compileVariable(variable, Attribute.STRING_SET)
							);
							break;
						case "object":
							getters.push(
								Command.compileVariable(
									value as VariableGetter,
									Attribute.OBJECT_GET
								)
							);
							setters.push(
								Command.compileVariable(variable, Attribute.OBJECT_SET)
							);
							break;
						case "actor":
							getters.push(Command.compileActor(value as ActorGetter));
							setters.push(
								Command.compileVariable(variable, Attribute.OBJECT_SET)
							);
							break;
						case "skill":
							getters.push(Command.compileSkill(value as SkillGetter));
							setters.push(
								Command.compileVariable(variable, Attribute.OBJECT_SET)
							);
							break;
						case "state":
							getters.push(Command.compileState(value as StateGetter));
							setters.push(
								Command.compileVariable(variable, Attribute.OBJECT_SET)
							);
							break;
						case "equipment":
							getters.push(Command.compileEquipment(value as EquipmentGetter));
							setters.push(
								Command.compileVariable(variable, Attribute.OBJECT_SET)
							);
							break;
						case "item":
							getters.push(Command.compileItem(value as ItemGetter));
							setters.push(
								Command.compileVariable(variable, Attribute.OBJECT_SET)
							);
							break;
						case "trigger":
							getters.push(Command.compileTrigger(value as TriggerGetter));
							setters.push(
								Command.compileVariable(variable, Attribute.OBJECT_SET)
							);
							break;
						case "light":
							getters.push(Command.compileLight(value as LightGetter));
							setters.push(
								Command.compileVariable(variable, Attribute.OBJECT_SET)
							);
							break;
						case "element":
							getters.push(Command.compileElement(value as ElementGetter));
							setters.push(
								Command.compileVariable(variable, Attribute.OBJECT_SET)
							);
							break;
					}
					continue outer;
				}
			}
		}
		const values = new Array(getters.length);
		let getArguments = Function.empty;
		let setArguments = Function.empty;
		// 编译读取参数方法
		{
			const [a, b, c, d, e] = getters;
			switch (getters.length) {
				case 0:
					break;
				case 1:
					getArguments = () => {
						values[0] = a();
					};
					break;
				case 2:
					getArguments = () => {
						values[0] = a();
						values[1] = b();
					};
					break;
				case 3:
					getArguments = () => {
						values[0] = a();
						values[1] = b();
						values[2] = c();
					};
					break;
				case 4:
					getArguments = () => {
						values[0] = a();
						values[1] = b();
						values[2] = c();
						values[3] = d();
					};
					break;
				case 5:
					getArguments = () => {
						values[0] = a();
						values[1] = b();
						values[2] = c();
						values[3] = d();
						values[4] = e();
					};
					break;
				default:
					getArguments = () => {
						const length = getters.length;
						for (let i = 0; i < length; i++) {
							values[i] = getters[i]();
						}
					};
					break;
			}
		}
		// 编译写入参数方法
		{
			const [a, b, c, d, e] = setters;
			switch (setters.length) {
				case 0:
					break;
				case 1:
					setArguments = () => {
						a(values[0]);
					};
					break;
				case 2:
					setArguments = () => {
						a(values[0]);
						b(values[1]);
					};
					break;
				case 3:
					setArguments = () => {
						a(values[0]);
						b(values[1]);
						c(values[2]);
					};
					break;
				case 4:
					setArguments = () => {
						a(values[0]);
						b(values[1]);
						c(values[2]);
						d(values[3]);
					};
					break;
				case 5:
					setArguments = () => {
						a(values[0]);
						b(values[1]);
						c(values[2]);
						d(values[3]);
						e(values[4]);
					};
					break;
				default:
					setArguments = () => {
						const length = setters.length;
						for (let i = 0; i < length; i++) {
							setters[i](values[i]);
						}
					};
					break;
			}
		}
		return { getArguments, setArguments };
	}
```

---



文档生成时间：2026/1/31 13:13:58
