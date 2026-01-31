---
sidebar_position: 1
title: unloadSubscene 卸载子场景
---

## unloadSubscene

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

卸载子场景

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ sceneId \}` | `\{ sceneId\: string \}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8258 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8258)

```typescript
protected unloadSubscene({ sceneId }: { sceneId: string }): CommandFunction {
		const getSceneId = Command.compileString(sceneId);
		return () => {
			Scene.binding?.unloadSubscene(getSceneId());
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
