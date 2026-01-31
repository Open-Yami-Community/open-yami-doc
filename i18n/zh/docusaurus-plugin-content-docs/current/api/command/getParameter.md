---
sidebar_position: 1
title: getParameter 从参数字符串中获取指定类型的值
---

## getParameter

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

从参数字符串中获取指定类型的值

参数 `key`: 参数名称

参数 `type`: 参数类型

返回值:参数值

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |
| `type` | `CommandParameterType` | - | - |

### 返回值

类型: `boolean \| number \| string \| undefined`

参数值

### 源代码

**位置**: [第 957 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L957)

```typescript
public getParameter(
		key: string,
		type: CommandParameterType
	): boolean | number | string | undefined {
		if (!key) return undefined;
		let regexp = this.paramRegExpMap[key];
		if (regexp === undefined) {
			regexp = new RegExp(`(?:^|,)\\s*${key}(?:\\s*:\\s*(.*?))?\\s*(?:$|,)`);
			this.paramRegExpMap[key] = regexp;
		}
		const match = Command.parameters.match(regexp);
		if (match) {
			switch (type) {
				case "boolean":
					switch (match[1]) {
						case undefined:
						case "true":
							return true;
						case "false":
							return false;
					}
					return undefined;
				case "number": {
					const string = match[1];
					if (string) {
						const number = parseFloat(string);
						if (!isNaN(number)) return number;
					}
					return undefined;
				}
				case "string":
					return match[1];
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
