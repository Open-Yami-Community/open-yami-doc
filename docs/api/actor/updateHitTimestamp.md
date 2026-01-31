---
sidebar_position: 1
title: updateHitTimestamp 更新受击时间戳
---

## updateHitTimestamp

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

更新受击时间戳

### 返回值

类型: `void`

### 源代码

**位置**: [第 1081 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1081)

```typescript
public updateHitTimestamp(): void {
		this.hitTimestamp = Time.elapsed;
	}
```

---



文档生成时间：2026/1/31 13:13:58
