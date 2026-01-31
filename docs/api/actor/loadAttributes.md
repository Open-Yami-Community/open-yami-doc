---
sidebar_position: 1
title: loadAttributes 加载初始角色属性
---

## loadAttributes

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

加载初始角色属性

### 返回值

类型: `void`

### 源代码

**位置**: [第 604 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L604)

```typescript
private loadAttributes(): void {
		Attribute.loadEntries(this.attributes, this.data.attributes);
	}
```

---



文档生成时间：2026/1/31 13:13:57
