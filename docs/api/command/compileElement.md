---
sidebar_position: 1
title: compileElement 编译元素对象
---

## compileElement

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译元素对象

参数 `element`: 元素访问器

返回值:元素访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `ElementGetter` | - | - |

### 返回值

类型: `() =&gt; UIElement \| undefined`

元素访问器函数

### 源代码

**位置**: [第 884 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L884)

```typescript
public compileElement(element: ElementGetter): () => UIElement | undefined {
		switch (element.type) {
			case "trigger":
				return () => CurrentEvent.triggerElement;
			case "latest":
				return () => UI.latest;
			case "by-id": {
				const { presetId } = element;
				return () => UI.get(presetId);
			}
			case "by-index": {
				const getParent = Command.compileElement(element.parent);
				const getIndex = Command.compileNumber(element.index, -1);
				return () => getParent()?.children[getIndex()];
			}
			case "by-ancestor-and-id": {
				const { ancestor, presetId } = element;
				const getAncestor = Command.compileElement(ancestor);
				return () => {
					const ancestor = getAncestor();
					return ancestor
						? ancestor.query("presetId", presetId) ??
								ancestor.query("referenceId", presetId)
						: undefined;
				};
			}
			case "by-button-index": {
				const getFocus = Command.compileElement(element.focus);
				const getIndex = Command.compileNumber(element.index, -1);
				return () => {
					const focus = getFocus();
					return focus instanceof UIElement
						? UI.getFocusedButtons(focus, true)[getIndex()]
						: undefined;
				};
			}
			case "selected-button": {
				const getFocus = Command.compileElement(element.focus);
				return () => UI.getSelectedButton(getFocus());
			}
			case "focus":
				return () => UI.getFocus();
			case "parent": {
				const getElement = Command.compileVariable(
					element.variable,
					Attribute.ELEMENT_GET
				);
				return () => getElement()?.parent ?? undefined;
			}
			case "variable":
				return Command.compileVariable(element.variable, Attribute.ELEMENT_GET);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
