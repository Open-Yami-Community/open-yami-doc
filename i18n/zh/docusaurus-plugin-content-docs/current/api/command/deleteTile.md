---
sidebar_position: 1
title: deleteTile 删除图块
---

## deleteTile

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

删除图块

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ tilemap, tilemapX, tilemapY, \}` | `\{
		tilemap\: TilemapGetter;
		tilemapX\: number \| VariableGetter;
		tilemapY\: number \| VariableGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8492 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8492)

```typescript
protected deleteTile({
		tilemap,
		tilemapX,
		tilemapY,
	}: {
		tilemap: TilemapGetter;
		tilemapX: number | VariableGetter;
		tilemapY: number | VariableGetter;
	}): CommandFunction {
		const getTilemap = Command.compileTilemap(tilemap);
		const getTilemapX = Command.compileNumber(tilemapX, -1);
		const getTilemapY = Command.compileNumber(tilemapY, -1);
		return () => {
			getTilemap()?.deleteTile(
				Math.floor(getTilemapX()),
				Math.floor(getTilemapY())
			);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
