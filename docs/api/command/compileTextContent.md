---
sidebar_position: 1
title: compileTextContent 编译文本内容
---

## compileTextContent

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译文本内容

参数 `content`: 需要解析插入变量的文本内容

返回值:文本内容解析函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `content` | `string` | - | - |

### 返回值

类型: `() =&gt; string`

文本内容解析函数

### 源代码

**位置**: [第 1447 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L1447)

```typescript
public compileTextContent(content: string): () => string {
		if (typeof content === "object") {
			return Command.compileString(content);
		}
		// 获取变量标签正则表达式
		const method = this.compileTextContent as any;
		let { regexp } = method;
		if (!regexp) {
			regexp = method.regexp = /<(local):(.*?)>|<(global):([0-9a-f]{16})>/g;
		}
		const slices: Array<AttributeValue | undefined> = [];
		const setters: Array<Function> = [];
		let li = 0;
		let match;
		while ((match = regexp.exec(content))) {
			const mi = match.index;
			if (mi > li) {
				slices.push(content.slice(li, mi));
			}
			const index = slices.length;
			const scope: string = match[1] ?? match[3];
			const key: string = match[2] ?? match[4];
			let getter: () => AttributeValue | undefined;
			switch (scope) {
				case "local":
					getter = () => CurrentEvent.attributes[key];
					break;
				case "global":
					getter = () => Variable.get(key);
					break;
			}
			const setter = () => (slices[index] = getter());
			setters.push(setter);
			slices.push("");
			li = regexp.lastIndex;
		}
		// 无匹配标签的情况
		if (li === 0) {
			const fn = () => content;
			fn.constant = true;
			return fn;
		}
		// 找到标签的情况
		if (content.length > li) {
			slices.push(content.slice(li));
		}
		return () => {
			for (const setter of setters) {
				setter();
			}
			return slices.join("");
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
