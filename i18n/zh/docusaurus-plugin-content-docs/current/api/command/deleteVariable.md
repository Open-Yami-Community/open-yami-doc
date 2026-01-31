---
sidebar_position: 1
title: deleteVariable 删除变量
---

## deleteVariable

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

删除变量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ variable, \}` | `\{
		variable\: VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 2930 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L2930)

```typescript
protected deleteVariable({
		variable,
	}: {
		variable: VariableGetter;
	}): CommandFunction {
		const deleter = Command.compileVariable(variable, Attribute.DELETE);
		return () => {
			deleter();
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
