---
sidebar_position: 1
title: destroyAsync 异步销毁角色
---

## destroyAsync

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

异步销毁角色

### 返回值

类型: `void`

### 源代码

**位置**: [第 1272 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1272)

```typescript
public destroyAsync(): void {
		Callback.push(() => {
			this.destroy();
		});
	}
```

---



文档生成时间：2026/1/31 13:13:58
