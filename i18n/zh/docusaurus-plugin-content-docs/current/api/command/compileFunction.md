---
sidebar_position: 1
title: compileFunction 编译函数
---

## compileFunction

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译函数

参数 `script`: 函数返回值脚本

返回值:编译后的函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `script` | `string` | - | - |

### 返回值

类型: `Function`

编译后的函数

### 源代码

**位置**: [第 943 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L943)

```typescript
private compileFunction(script: string): Function {
		try {
			return new Function(`return ${script}`);
		} catch (error) {
			return Function.empty;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
