---
sidebar_position: 1
title: updateSceneActorData 更新场景角色数据
---

## updateSceneActorData

**类型**: `MethodDeclaration`

**所属类**: `GlobalActor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

更新场景角色数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 1445 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1445)

```typescript
private updateSceneActorData() {
		if (this.presetId && !Scene.presets[this.presetId]) {
			this.setSceneActorData(null);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
