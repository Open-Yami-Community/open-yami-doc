---
sidebar_position: 1
title: unpackTeamData 解包角色队伍数据
---

## unpackTeamData

**类型**: `MethodDeclaration`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

解包角色队伍数据

参数 `keys`: 队伍的ID列表

参数 `data`: 队伍的数据

返回值:解码后的队伍数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `keys` | `string\[\]` | - | - |
| `data` | `any` | - | - |

### 返回值

类型: `UnpackedTeamData`

解码后的队伍数据

### 源代码

**位置**: [第 124 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L124)

```typescript
private unpackTeamData(keys: string[], data: any): UnpackedTeamData {
		const relationsMap: HashMap<HashMap<number>> = {};
		const collisionsMap: HashMap<HashMap<number>> = {};
		const length = keys.length;
		// 解码已压缩的队伍关系数据
		const sRelations = Codec.decodeTeamData(data.relations, length);
		const sCollisions = Codec.decodeTeamData(data.collisions, length);
		const a = length * 2;
		// 构建完整的队伍关系数据结构
		for (let i = 0; i < length; i++) {
			const dRelations: HashMap<number> = {};
			const dCollisions: HashMap<number> = {};
			for (let j = 0; j < i; j++) {
				const ri = ((a - j + 1) / 2) * j - j + i;
				dRelations[keys[j]] = sRelations[ri];
				dCollisions[keys[j]] = sCollisions[ri];
			}
			const b = ((a - i + 1) / 2) * i - i;
			for (let j = i; j < length; j++) {
				const ri = b + j;
				dRelations[keys[j]] = sRelations[ri];
				dCollisions[keys[j]] = sCollisions[ri];
			}
			relationsMap[keys[i]] = dRelations;
			collisionsMap[keys[i]] = dCollisions;
		}
		return { relationsMap, collisionsMap };
	}
```

---



文档生成时间：2026/1/31 13:13:57
