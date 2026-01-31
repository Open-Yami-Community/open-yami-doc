---
sidebar_position: 1
title: loadSubscene 加载子场景
---

## loadSubscene

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

加载子场景

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ sceneId, shiftX, shiftY, \}` | `\{
		sceneId\: string;
		shiftX\: number;
		shiftY\: number;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8235 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8235)

```typescript
protected loadSubscene({
		sceneId,
		shiftX,
		shiftY,
	}: {
		sceneId: string;
		shiftX: number;
		shiftY: number;
	}): CommandFunction {
		const getSceneId = Command.compileString(sceneId);
		const getShiftX = Command.compileNumber(shiftX);
		const getShiftY = Command.compileNumber(shiftY);
		return () => {
			Scene.binding?.loadSubscene(
				getSceneId(),
				Math.floor(getShiftX()),
				Math.floor(getShiftY())
			);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
