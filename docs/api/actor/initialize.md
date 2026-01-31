---
sidebar_position: 1
title: initialize 初始化
---

## initialize

**类型**: `MethodDeclaration`

**所属类**: `ActorCollider`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

初始化

### 返回值

类型: `void`

### 源代码

**位置**: [第 1584 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1584)

```typescript
public static initialize(): void {
		const { collision } = Data.config;
		// 设置角色碰撞系统开关
		this.actorCollisionEnabled = collision.actor.enabled;
		// 设置场景碰撞系统开关
		this.sceneCollisionEnabled = collision.scene.enabled;
		// 设置场景碰撞角色体积的半径
		this.sceneCollisionRadius = collision.scene.actorSize / 2;
		// 设置角色碰撞的最小距离
		this.actorCollisionDist = collision.scene.actorSize;
	}
```

---



文档生成时间：2026/1/31 13:13:58
