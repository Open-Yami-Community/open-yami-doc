---
sidebar_position: 1
title: isEnemy 判断敌对关系
---

## isEnemy

**类型**: `MethodDeclaration`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

判断敌对关系

参数 `teamId1`: 队伍ID1

参数 `teamId2`: 队伍ID2

返回值:是否为敌对关系

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `teamId1` | `string` | - | - |
| `teamId2` | `string` | - | - |

### 返回值

类型: `boolean`

是否为敌对关系

### 源代码

**位置**: [第 178 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L178)

```typescript
public isEnemy(teamId1: string, teamId2: string): boolean {
		return this.map[teamId1]?.relations[teamId2] === 0;
	}
```

---



文档生成时间：2026/1/31 13:13:57
