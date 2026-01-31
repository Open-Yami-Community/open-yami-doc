---
sidebar_position: 1
title: clampCamera 限制摄像机边界
---

## clampCamera

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

限制摄像机边界

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ left, top, right, bottom, \}` | `\{
		left\: number \| VariableGetter;
		top\: number \| VariableGetter;
		right\: number \| VariableGetter;
		bottom\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8275 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8275)

```typescript
protected clampCamera({
		left,
		top,
		right,
		bottom,
	}: {
		left: number | VariableGetter;
		top: number | VariableGetter;
		right: number | VariableGetter;
		bottom: number | VariableGetter;
	}): CommandFunction {
		const getLeft = Command.compileNumber(left, 0, -1000, 1000);
		const getTop = Command.compileNumber(top, 0, -1000, 1000);
		const getRight = Command.compileNumber(right, 0, -1000, 1000);
		const getBottom = Command.compileNumber(bottom, 0, -1000, 1000);
		return () => {
			Camera.clamp(getLeft(), getTop(), getRight(), getBottom());
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
