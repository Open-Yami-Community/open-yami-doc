---
sidebar_position: 1
title: compileScript 编译自定义指令脚本
---

## compileScript

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译自定义指令脚本

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ id, params, \}` | `\{
		/\*\* 事件指令ID \*/
		id\: string;
		/\*\* 事件指令参数 \*/
		params\: HashMap&lt;unknown&gt;;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 194 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L194)

```typescript
private compileScript({
		id,
		params,
	}: {
		/** 事件指令ID */
		id: string;
		/** 事件指令参数 */
		params: HashMap<unknown>;
	}): CommandFunction {
		let fn = Command.skip;
		return () => {
			const script = this.scriptMap[id];
			if (typeof script?.call === "function") {
				// 如果指令脚本拥有call方法，则编译参数列表，替换指令函数
				const parameters = ScriptManager.compileParamList(id, params);
				const length = parameters.length;
				if (length === 0) {
					fn = () => script.call(CurrentEvent) ?? true;
				} else {
					fn = () => {
						for (let i = 0; i < length; i += 2) {
							let value = parameters[i + 1];
							if (typeof value === "function") {
								value = value();
							}
							script[parameters[i] as string] = value;
						}
						return script.call(CurrentEvent) ?? true;
					};
				}
			}
			// 编译时不能确定脚本已加载，因此使用运行时编译
			return (CommandList[CommandIndex - 1] = fn)();
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
