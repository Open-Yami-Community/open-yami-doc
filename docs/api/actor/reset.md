---
sidebar_position: 1
title: reset 重置角色目标管理器
---

## reset

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

重置角色目标管理器

### 返回值

类型: `void`

### 源代码

**位置**: [第 5468 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5468)

```typescript
public reset(): void {
		this.resetTargets();
		this.resetRelatedTargets();
	}
```

---



文档生成时间：2026/1/31 13:13:58
