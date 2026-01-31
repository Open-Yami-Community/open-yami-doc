---
sidebar_position: 1
title: compileObject 编译场景对象
---

## compileObject

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译场景对象

参数 `object`: 对象访问器

返回值:对象访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `object` | `ObjectGetter` | - | - |

### 返回值

类型: `() =&gt; PresetObject \| undefined`

对象访问器函数

### 源代码

**位置**: [第 839 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L839)

```typescript
private compileObject(object: ObjectGetter): () => PresetObject | undefined {
		switch (object.type) {
			case "trigger":
				return () => {
					const object = CurrentEvent.triggerObject;
					return Command.filterValidObject(
						object instanceof Trigger ? undefined : object
					);
				};
			case "latest":
				return () => Command.filterValidObject(Scene.latest);
			case "by-id": {
				const { presetId } = object;
				return () => {
					return Scene.entity.get(presetId) as PresetObject | undefined;
				};
			}
			case "variable": {
				const getObject = Command.compileVariable(
					object.variable,
					Attribute.OBJECT_GET
				);
				return () => {
					const object = getObject();
					return Command.filterValidObject(
						object instanceof Actor ||
							object instanceof SceneAnimation ||
							object instanceof SceneParticleEmitter ||
							object instanceof SceneRegion ||
							object instanceof SceneLight ||
							object instanceof SceneParallax ||
							object instanceof SceneTilemap
							? object
							: undefined
					);
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
