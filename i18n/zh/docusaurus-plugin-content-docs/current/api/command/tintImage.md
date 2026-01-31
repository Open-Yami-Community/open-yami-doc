---
sidebar_position: 1
title: tintImage 改变图像色调
---

## tintImage

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

改变图像色调

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ element, mode, tint, easingId, duration, wait, \}` | `\{
		element\: ElementGetter;
		mode\: string;
		tint\: ImageTint;
		easingId\: string;
		duration\: number;
		wait\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 4833 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4833)

```typescript
protected tintImage({
		element,
		mode,
		tint,
		easingId,
		duration,
		wait,
	}: {
		element: ElementGetter;
		mode: string;
		tint: ImageTint;
		easingId: string;
		duration: number;
		wait: boolean;
	}): CommandFunction {
		const getElement = Command.compileElement(element);
		const tintProps: HashMap<number> = {};
		switch (mode) {
			case "full":
				tintProps.red = tint[0];
				tintProps.green = tint[1];
				tintProps.blue = tint[2];
				tintProps.gray = tint[3];
				break;
			case "rgb":
				tintProps.red = tint[0];
				tintProps.green = tint[1];
				tintProps.blue = tint[2];
				break;
			case "gray":
				tintProps.gray = tint[3];
				break;
		}
		return () => {
			const element = getElement();
			if (element instanceof ImageElement) {
				element.setTint(tintProps, easingId, duration);
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
