---
sidebar_position: 1
title: deleteScene 删除场景
---

## deleteScene

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

删除场景

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8267 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8267)

```typescript
protected deleteScene(): CommandFunction {
		return () => {
			Scene.delete();
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
