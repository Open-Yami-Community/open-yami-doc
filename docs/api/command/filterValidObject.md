---
sidebar_position: 1
title: filterValidObject 筛选出有效的场景对象
---

## filterValidObject

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

筛选出有效的场景对象

返回值:有效对象(如果有)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `object` | `T \| undefined` | - | - |

### 返回值

类型: `T \| undefined`

有效对象(如果有)

### 源代码

**位置**: [第 486 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L486)

```typescript
private filterValidObject<T extends SceneObject>(
		object: T | undefined
	): T | undefined {
		return object?.destroyed === false ? object : undefined;
	}
```

---



文档生成时间：2026/1/31 13:13:58
