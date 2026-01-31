---
sidebar_position: 1
title: createObject 创建对象
---

## createObject

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

创建对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ presetId, position, \}` | `\{
		presetId\: string;
		position\: PositionGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 5650 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L5650)

```typescript
protected createObject({
		presetId,
		position,
	}: {
		presetId: string;
		position: PositionGetter;
	}): CommandFunction {
		const getPoint = Command.compilePosition(position);
		return () => {
			let fn = Command.skip;
			const preset = Scene.presets[presetId];
			switch (preset?.class) {
				case "actor":
					fn = () => {
						const actor = Scene.binding?.createActor(preset);
						const point = getPoint(preset);
						if (actor && point) {
							actor.setPosition(point.x, point.y);
						}
						return true;
					};
					break;
				case "animation":
					fn = () => {
						const animation = Scene.binding?.createAnimation(preset);
						const point = getPoint(preset);
						if (animation && point) {
							animation.x = point.x;
							animation.y = point.y;
						}
						return true;
					};
					break;
				case "particle":
					fn = () => {
						const particle = Scene.binding?.createParticle(preset);
						const point = getPoint(preset);
						if (particle && point) {
							particle.x = point.x;
							particle.y = point.y;
						}
						return true;
					};
					break;
				case "region":
					fn = () => {
						const region = Scene.binding?.createRegion(preset);
						const point = getPoint(preset);
						if (region && point) {
							region.x = point.x;
							region.y = point.y;
						}
						return true;
					};
					break;
				case "light":
					fn = () => {
						const light = Scene.binding?.createLight(preset);
						const point = getPoint(preset);
						if (light && point) {
							light.x = point.x;
							light.y = point.y;
						}
						return true;
					};
					break;
				case "parallax":
					fn = () => {
						const parallax = Scene.binding?.createParallax(preset);
						const point = getPoint(preset);
						if (parallax && point) {
							parallax.x = point.x;
							parallax.y = point.y;
						}
						return true;
					};
					break;
				case "tilemap":
					fn = () => {
						const tilemap = Scene.binding?.createTilemap(preset);
						const point = getPoint(preset);
						if (tilemap && point) {
							tilemap.x = point.x;
							tilemap.y = point.y;
						}
						return true;
					};
					break;
			}
			// 编译时不能确定预设对象数据已加载，因此使用运行时编译
			return (CommandList[CommandIndex - 1] = fn)();
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
