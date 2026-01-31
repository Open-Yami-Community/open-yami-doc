---
sidebar_position: 1
title: updateGridPosition 更新角色在场景中的网格位置
---

## updateGridPosition

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

更新角色在场景中的网格位置

### 返回值

类型: `void`

### 源代码

**位置**: [第 1073 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1073)

```typescript
public updateGridPosition(): void {
		this.intX = Math.floor(this.x);
		this.intY = Math.floor(this.y);
	}
```

---



文档生成时间：2026/1/31 13:13:58
