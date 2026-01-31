---
sidebar_position: 1
title: setAmbientLight 设置环境光
---

## setAmbientLight

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置环境光

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ red, green, blue, easingId, duration, wait, \}` | `\{
		red\: number \| VariableGetter;
		green\: number \| VariableGetter;
		blue\: number \| VariableGetter;
		easingId\: string;
		duration\: number \| VariableGetter;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8375 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8375)

```typescript
protected setAmbientLight({
		red,
		green,
		blue,
		easingId,
		duration,
		wait,
	}: {
		red: number | VariableGetter;
		green: number | VariableGetter;
		blue: number | VariableGetter;
		easingId: string;
		duration: number | VariableGetter;
		wait: boolean;
	}): CommandFunction {
		const getRed = Command.compileNumber(red, 0, 0, 255);
		const getGreen = Command.compileNumber(green, 0, 0, 255);
		const getBlue = Command.compileNumber(blue, 0, 0, 255);
		const getDuration = Command.compileNumber(duration);
		return () => {
			if (Scene.binding !== null) {
				const red = getRed();
				const green = getGreen();
				const blue = getBlue();
				const duration = getDuration();
				Scene.binding.setAmbientLight(red, green, blue, easingId, duration);
				if (wait && duration > 0) {
					return CurrentEvent.wait(duration);
				}
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
