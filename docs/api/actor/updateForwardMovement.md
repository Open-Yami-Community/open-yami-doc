---
sidebar_position: 1
title: updateForwardMovement 更新角色向前移动
---

## updateForwardMovement

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

更新角色向前移动

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2430 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2430)

```typescript
private updateForwardMovement(deltaTime: number): void {
		const actor = this.actor;
		const x = this.velocityX * deltaTime;
		const y = this.velocityY * deltaTime;
		actor.updateAngle(this.movementAngle);
		actor.move(x, y);
	}
```

---



文档生成时间：2026/1/31 13:13:58
