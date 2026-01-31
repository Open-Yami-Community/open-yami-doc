---
sidebar_position: 1
title: renderOutline 渲染轮廓
---

## renderOutline

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

渲染轮廓

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ operation, actor, color, \}` | `\{
		operation\: "add" \| "remove" \| "reset";
		actor\?\: ActorGetter;
		color\?\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7618 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7618)

```typescript
protected renderOutline({
		operation,
		actor,
		color,
	}: {
		operation: "add" | "remove" | "reset";
		actor?: ActorGetter;
		color?: string;
	}): CommandFunction {
		switch (operation) {
			case "add": {
				const getActor = Command.compileActor(actor!);
				const colorArray = [...Color.parseFloatArray(color!)] as ColorArray;
				return () => {
					const actor = getActor();
					if (actor) {
						ActorOutline.add(actor, colorArray);
					}
					return true;
				};
			}
			case "remove": {
				const getActor = Command.compileActor(actor!);
				return () => {
					const actor = getActor();
					if (actor) {
						ActorOutline.remove(actor);
					}
					return true;
				};
			}
			case "reset":
				return () => {
					ActorOutline.reset();
					return true;
				};
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
