---
sidebar_position: 1
title: restoreSceneInput 恢复场景输入事件
---

## restoreSceneInput

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

恢复场景输入事件

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8935 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8935)

```typescript
protected restoreSceneInput(): CommandFunction {
		return () => {
			Scene.restoreInput();
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
