---
sidebar_position: 1
title: unclampCamera 解除摄像机边界
---

## unclampCamera

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

解除摄像机边界

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8297 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8297)

```typescript
protected unclampCamera(): CommandFunction {
		return () => {
			Camera.unclamp();
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
