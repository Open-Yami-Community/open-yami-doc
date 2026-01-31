---
sidebar_position: 1
title: setResolution 设置分辨率
---

## setResolution

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置分辨率

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ width, height, sceneScale, uiScale, \}` | `\{
		width\: number \| VariableGetter;
		height\: number \| VariableGetter;
		sceneScale\: number \| VariableGetter;
		uiScale\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8976 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8976)

```typescript
protected setResolution({
		width,
		height,
		sceneScale,
		uiScale,
	}: {
		width: number | VariableGetter;
		height: number | VariableGetter;
		sceneScale: number | VariableGetter;
		uiScale: number | VariableGetter;
	}): CommandFunction {
		const getWidth = Command.compileNumber(width, 1920, 240, 7680);
		const getHeight = Command.compileNumber(height, 1080, 240, 7680);
		const getSceneScale = Command.compileNumber(sceneScale, 1, 0.5, 4);
		const getUiScale = Command.compileNumber(uiScale, 1, 0.5, 4);
		return () => {
			Stage.setResolution(
				getWidth(),
				getHeight(),
				getSceneScale(),
				getUiScale()
			);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
