---
sidebar_position: 1
title: requestURL 
---

## requestURL

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ url, callback, method = "GET", data, headers, \}` | `\{
		url\: string \| VariableGetter;
		method\: string;
		callback\: string;
		headers\: Record&lt;string, string&gt;\[\];
		data\: Record&lt;string, string&gt;\[\];
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8547 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8547)

```typescript
protected requestURL({
		url,
		callback,
		method = "GET",
		data,
		headers,
	}: {
		url: string | VariableGetter;
		method: string;
		callback: string;
		headers: Record<string, string>[];
		data: Record<string, string>[];
	}): CommandFunction {
		const toTranslate = (data: Record<string, string>[]) => {
			return data.reduce((result, item) => {
				const key =
					typeof item.key === "string"
						? item.key
						: Command.compileVariable(item.key, Attribute.GET)();
				const value =
					typeof item.value === "string"
						? item.value
						: Command.compileVariable(item.value, Attribute.GET)();
				result[key] = value;
				return result;
			}, {});
		};
		return () => {
			const urlString =
				typeof url === "string"
					? url
					: Command.compileVariable(url, Attribute.GET)();
			// @ts-ignore
			axios({
				method,
				url: urlString,
				headers: toTranslate(headers),
				...(method.toUpperCase() === "GET"
					? { params: toTranslate(data) }
					: { data: toTranslate(data) }),
			})
				.catch((error: any) => {
					const command = EventManager.guidMap[callback];
					if (command) {
						const e = new EventHandler(command);
						Attribute.SET(e.attributes, "@code", -1);
						Attribute.SET(e.attributes, "@response", error.message);
						EventHandler.call(e);
					}
					throw error;
				})
				.then((response: any) => {
					if (!response) return;
					const command = EventManager.guidMap[callback];
					if (command) {
						const e = new EventHandler(command);
						Attribute.SET(e.attributes, "@code", response.status);
						Attribute.SET(e.attributes, "@response", response.data);
						EventHandler.call(e);
					}
				});
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
