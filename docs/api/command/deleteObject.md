---
sidebar_position: 1
title: deleteObject 删除对象
---

## deleteObject

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

删除对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ object, \}` | `\{
		object\: ObjectGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 5815 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5815)

```typescript
protected deleteObject({
		object,
	}: {
		object: ObjectGetter;
	}): CommandFunction {
		const getObject = Command.compileObject(object);
		return () => {
			getObject()?.destroyAsync();
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
