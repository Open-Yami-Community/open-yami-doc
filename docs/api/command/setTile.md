---
sidebar_position: 1
title: setTile 设置图块
---

## setTile

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置图块

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ tilemap, tilemapX, tilemapY, tilesetId, tilesetX, tilesetY, \}` | `\{
		tilemap\: TilemapGetter;
		tilemapX\: number \| VariableGetter;
		tilemapY\: number \| VariableGetter;
		tilesetId\: string;
		tilesetX\: number \| VariableGetter;
		tilesetY\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8456 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8456)

```typescript
protected setTile({
		tilemap,
		tilemapX,
		tilemapY,
		tilesetId,
		tilesetX,
		tilesetY,
	}: {
		tilemap: TilemapGetter;
		tilemapX: number | VariableGetter;
		tilemapY: number | VariableGetter;
		tilesetId: string;
		tilesetX: number | VariableGetter;
		tilesetY: number | VariableGetter;
	}): CommandFunction {
		const getTilemap = Command.compileTilemap(tilemap);
		const getTilemapX = Command.compileNumber(tilemapX, -1);
		const getTilemapY = Command.compileNumber(tilemapY, -1);
		const getTilesetX = Command.compileNumber(tilesetX, -1);
		const getTilesetY = Command.compileNumber(tilesetY, -1);
		return () => {
			const tilemap = getTilemap();
			if (tilemap) {
				tilemap.setTile(
					Math.floor(getTilemapX()),
					Math.floor(getTilemapY()),
					tilesetId,
					Math.floor(getTilesetX()),
					Math.floor(getTilesetY())
				);
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
