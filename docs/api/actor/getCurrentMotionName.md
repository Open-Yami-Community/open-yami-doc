---
sidebar_position: 1
title: getCurrentMotionName 获取当前动作名称
---

## getCurrentMotionName

**类型**: `MethodDeclaration`

**所属类**: `AnimationController`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

获取当前动作名称

### 返回值

类型: `string`

### 源代码

**位置**: [第 3327 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3327)

```typescript
private getCurrentMotionName(): string {
		switch (this.state) {
			case "idle":
				return this.idleMotion;
			case "move":
				return this.moveMotion;
			default:
				throw new Error("Invalid state");
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
