---
sidebar_position: 1
title: downloadFile 
---

## downloadFile

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ url, callback, rateCallback, method = "GET", data, headers, isBackground, isBackgroundPath = "", \}` | `\{
		url\: string \| VariableGetter;
		method\: string;
		callback\: string;
		rateCallback\: string;
		headers\: Record&lt;string, string&gt;\[\];
		data\: Record&lt;string, string&gt;\[\];
		isBackground\: boolean;
		isBackgroundPath\: string \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8613 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8613)

```typescript
protected downloadFile({
		url,
		callback,
		rateCallback,
		method = "GET",
		data,
		headers,
		isBackground,
		isBackgroundPath = "",
	}: {
		url: string | VariableGetter;
		method: string;
		callback: string;
		rateCallback: string;
		headers: Record<string, string>[];
		data: Record<string, string>[];
		isBackground: boolean;
		isBackgroundPath: string | VariableGetter;
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
			const pathString =
				typeof isBackgroundPath === "string"
					? isBackgroundPath
					: Command.compileVariable(isBackgroundPath, Attribute.GET)();
			// @ts-ignore
			const source = axios.CancelToken.source();
			// @ts-ignore
			axios({
				method,
				url: urlString,
				headers: toTranslate(headers),
				...(method.toUpperCase() === "GET"
					? { params: toTranslate(data) }
					: { data: toTranslate(data) }),
				cancelToken: source.token,
				responseType: "blob",
				onDownloadProgress: (progressEvent: any) => {
					const command = EventManager.guidMap[rateCallback];
					if (command) {
						const e = new EventHandler(command);
						Attribute.SET(e.attributes, "@event", progressEvent);
						EventHandler.call(e);
					}
				},
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
						Attribute.SET(
							e.attributes,
							"@response",
							response.data.arrayBuffer()
						);
						const downloadFn = (fileName = `file_${Date.now()}`) => {
							const blobUrl = URL.createObjectURL(response.data);
							const link = document.createElement("a");
							link.href = blobUrl;
							link.download = fileName;
							link.click();
							URL.revokeObjectURL(blobUrl);
						};
						Attribute.SET(e.attributes, "@download", downloadFn);
						if (isBackground) {
							if (Stats.shell === "electron") {
								response.data.arrayBuffer().then((buffer: ArrayBuffer) => {
									require("fs").writeFileSync(pathString, Buffer.from(buffer));
								});
							} else
								console.warn(
									"Background download is not supported in this environment"
								);
						}
						EventHandler.call(e);
					}
				});
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
