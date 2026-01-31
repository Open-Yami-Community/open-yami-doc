---
sidebar_position: 1
title: loadImage 加载图像
---

## loadImage

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

加载图像

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ element, type, actor, skill, state, equipment, item, key, variable, \}` | `\{
		element\: ElementGetter;
		type\: string;
		actor\?\: ActorGetter;
		skill\?\: SkillGetter;
		state\?\: StateGetter;
		equipment\?\: EquipmentGetter;
		item\?\: ItemGetter;
		key\?\: string \| VariableGetter;
		variable\?\: VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 4735 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4735)

```typescript
protected loadImage({
		element,
		type,
		actor,
		skill,
		state,
		equipment,
		item,
		key,
		variable,
	}: {
		element: ElementGetter;
		type: string;
		actor?: ActorGetter;
		skill?: SkillGetter;
		state?: StateGetter;
		equipment?: EquipmentGetter;
		item?: ItemGetter;
		key?: string | VariableGetter;
		variable?: VariableGetter;
	}): CommandFunction {
		const method = this.loadImage as any;
		let { setImageClip } = method;
		if (!setImageClip) {
			setImageClip = method.setImageClip = (
				element?: ImageElement,
				object?: any
			) => {
				if (element instanceof ImageElement && object) {
					element.setImageClip(object.icon ?? object.portrait, object.clip);
					element.resize();
				}
			};
		}
		const getElement = Command.compileElement(element);
		switch (type) {
			case "actor-portrait": {
				const getActor = Command.compileActor(actor!);
				return () => {
					setImageClip(getElement(), getActor());
					return true;
				};
			}
			case "skill-icon": {
				const getSkill = Command.compileSkill(skill!);
				return () => {
					setImageClip(getElement(), getSkill());
					return true;
				};
			}
			case "state-icon": {
				const getState = Command.compileState(state!);
				return () => {
					setImageClip(getElement(), getState());
					return true;
				};
			}
			case "equipment-icon": {
				const getEquipment = Command.compileEquipment(equipment!);
				return () => {
					setImageClip(getElement(), getEquipment());
					return true;
				};
			}
			case "item-icon": {
				const getItem = Command.compileItem(item!);
				return () => {
					setImageClip(getElement(), getItem());
					return true;
				};
			}
			case "shortcut-icon": {
				const getActor = Command.compileActor(actor!);
				const getKey = Command.compileEnumValue(key!);
				return () => {
					setImageClip(getElement(), getActor()?.shortcut.get(getKey()));
					return true;
				};
			}
			case "base64": {
				const getBase64 = Command.compileVariable(
					variable!,
					Attribute.STRING_GET
				);
				return () => {
					const base64 = getBase64();
					const element = getElement();
					if (typeof base64 === "string" && element instanceof ImageElement) {
						element.loadBase64(base64);
					}
					return true;
				};
			}
		}
		throw new Error("Compiling Error");
	}
```

---



文档生成时间：2026/1/31 13:13:58
