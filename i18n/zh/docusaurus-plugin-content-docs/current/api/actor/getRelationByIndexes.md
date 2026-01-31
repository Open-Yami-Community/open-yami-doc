---
sidebar_position: 1
title: getRelationByIndexes 通过队伍索引获取队伍关系
---

## getRelationByIndexes

**类型**: `MethodDeclaration`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

通过队伍索引获取队伍关系

参数 `teamIndex1`: 队伍索引1

参数 `teamIndex2`: 队伍索引2

返回值:队伍关系(0:敌对, 1:友好)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `teamIndex1` | `number` | - | - |
| `teamIndex2` | `number` | - | - |

### 返回值

类型: `number`

队伍关系(0:敌对, 1:友好)

### 源代码

**位置**: [第 168 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L168)

```typescript
public getRelationByIndexes(teamIndex1: number, teamIndex2: number): number {
		return this.relationMap[teamIndex1 | (teamIndex2 << 8)];
	}
```

---



文档生成时间：2026/1/31 13:13:57
