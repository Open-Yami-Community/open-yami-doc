---
sidebar_position: 1
title: isActive 判断角色是否处于激活状态(并且已出场)
---

## isActive

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

判断角色是否处于激活状态(并且已出场)

返回值:角色是激活状态

### 返回值

类型: `boolean`

角色是激活状态

### 源代码

**位置**: [第 1103 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1103)

```typescript
public isActive(): boolean {
		return this.active && this.parent !== null;
	}
```

---



文档生成时间：2026/1/31 13:13:58
