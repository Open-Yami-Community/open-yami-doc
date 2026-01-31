---
sidebar_position: 1
title: compileTilemap 编译瓦片地图对象
---

## compileTilemap

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译瓦片地图对象

参数 `tilemap`: 瓦片地图访问器

返回值:瓦片地图访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `tilemap` | `TilemapGetter` | - | - |

### 返回值

类型: `() =&gt; SceneTilemap \| undefined`

瓦片地图访问器函数

### 源代码

**位置**: [第 819 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L819)

```typescript
private compileTilemap(
		tilemap: TilemapGetter
	): () => SceneTilemap | undefined {
		switch (tilemap.type) {
			case "trigger":
				return () => Command.filterValidObject(CurrentEvent.triggerTilemap);
			case "by-id": {
				const { presetId } = tilemap;
				return () => {
					return Scene.entity.get(presetId) as SceneTilemap | undefined;
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
