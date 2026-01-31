---
sidebar_position: 1
title: setProgressBar 设置进度条
---

## setProgressBar

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置进度条

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

**位置**: [第 5064 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5064)

```typescript
protected setProgressBar({
		element,
		properties,
	}: {
		element: ElementGetter;
		properties: Array<{ key: string; value: any }>;
	}): CommandFunction {
		const method = this.setProgressBar as any;
		if (!method.initialized) {
			method.initialized = true;
			method.clipMap = {
				"clip-0": true,
				"clip-1": true,
				"clip-2": true,
				"clip-3": true,
			};
			method.colorMap = {
				"color-0": true,
				"color-1": true,
				"color-2": true,
				"color-3": true,
			};
		}
		const getElement = Command.compileElement(element);
		for (const property of properties) {
			if (typeof property.value === "object") {
				property.value = Command.compileNumber(property.value);
			}
		}
		return () => {
			const element = getElement();
			if (element instanceof ProgressBarElement) {
				for (let { key, value } of properties) {
					if (typeof value === "function") {
						value = value();
					}
					if (method.clipMap[key]) {
						element.clip[parseInt(key[5])] = value;
						continue;
					}
					if (method.colorMap[key]) {
						element.color[parseInt(key[6])] = value;
						continue;
					}
					// @ts-ignore
					element[key] = value;
				}
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
