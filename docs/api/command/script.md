---
sidebar_position: 1
title: script 执行脚本
---

## script

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

执行脚本

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ script \}` | `\{ script\: string \}` | - | - |

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 9003 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L9003)

```typescript
protected script({ script }: { script: string }): CommandFunction | null {
		const method = this.script as any;
		let { escape } = method;
		if (escape === undefined) {
			escape =
				/(?<=(?:[^\p{L}$_\d\s]|\n|^)\s*)\(\s*([\p{L}$_\d]+)\s*\)(?!\s*=>)/gu;
			method.escape = escape;
		}
		try {
			const code = script.replace(escape, 'CurrentEvent.attributes["$1"]');
			const fn = new Function(code);
			return () => (fn(), true);
		} catch  {
			return null;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
