---
sidebar_position: 1
title: setCursor 设置鼠标指针
---

## setCursor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置鼠标指针

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ image \}` | `\{ image\: string \}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8753 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8753)

```typescript
protected setCursor({ image }: { image: string }): CommandFunction {
		const style = document.documentElement.style as any;
		const meta = Data.manifest.guidMap[image];
		const path = meta?.path ?? "";
		let cursor = "default";
		let promise: Promise<any> | null = null;
		if (path) {
			promise = Loader.loadImage({ guid: image, save: true })
				.then(image => {
					cursor = `${CSS.encodeURL(image.src)}, default`;
					promise = null;
				})
				.catch(error => {
					console.warn(error);
				});
		}
		return () => {
			if (style.path !== path) {
				style.path = path;
				style.cursor = cursor;
				promise?.then(() => {
					if (style.path === path) {
						style.cursor = cursor;
					}
				});
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
