---
sidebar_position: 1
title: loadScene 加载场景
---

## loadScene

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

加载场景

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ sceneId, transfer, x, y, \}` | `\{
		sceneId\: string;
		transfer\: boolean;
		x\: number;
		y\: number;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8197 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8197)

```typescript
protected loadScene({
		sceneId,
		transfer,
		x,
		y,
	}: {
		sceneId: string;
		transfer: boolean;
		x: number;
		y: number;
	}): CommandFunction {
		const getSceneId = Command.compileString(sceneId);
		switch (transfer) {
			case true: {
				const getX = Command.compileNumber(x);
				const getY = Command.compileNumber(y);
				return () => {
					const event = CurrentEvent;
					const x = Math.floor(getX()) + 0.5;
					const y = Math.floor(getY()) + 0.5;
					Scene.load(getSceneId(), { x, y }).then(() => {
						event.continue();
					});
					return CurrentEvent.pause();
				};
			}
			case false:
				return () => {
					const event = CurrentEvent;
					Scene.load(getSceneId()).then(() => {
						event.continue();
					});
					return CurrentEvent.pause();
				};
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
