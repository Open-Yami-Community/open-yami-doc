---
sidebar_position: 1
title: updateLastPosition 更新上一次的位置
---

## updateLastPosition

**类型**: `MethodDeclaration`

**所属类**: `ActorCollider`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

更新上一次的位置

### 返回值

类型: `void`

### 源代码

**位置**: [第 1536 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1536)

```typescript
public updateLastPosition(): void {
		this.lastX = this.actor.x;
		this.lastY = this.actor.y;
	}
```

---



文档生成时间：2026/1/31 13:13:58
