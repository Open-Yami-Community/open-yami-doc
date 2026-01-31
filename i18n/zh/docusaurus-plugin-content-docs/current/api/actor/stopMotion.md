---
sidebar_position: 1
title: stopMotion 停止播放角色动作
---

## stopMotion

**类型**: `MethodDeclaration`

**所属类**: `AnimationController`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

停止播放角色动作

### 返回值

类型: `void`

### 源代码

**位置**: [第 3364 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3364)

```typescript
public stopMotion(): void {
		this.animation?.finish();
	}
```

---



文档生成时间：2026/1/31 13:13:58
