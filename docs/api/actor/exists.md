---
sidebar_position: 1
title: exists 判断角色是否存在目标
---

## exists

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

判断角色是否存在目标

### 返回值

类型: `boolean`

### 源代码

**位置**: [第 5390 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5390)

```typescript
public exists(): boolean {
		return this.targets.length !== 0;
	}
```

---



文档生成时间：2026/1/31 13:13:58
