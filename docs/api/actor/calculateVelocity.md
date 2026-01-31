---
sidebar_position: 1
title: calculateVelocity 计算角色的移动速度分量
---

## calculateVelocity

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

计算角色的移动速度分量

参数 `angle`: 移动速度的角度(弧度)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `angle` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2228 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2228)

```typescript
private calculateVelocity(angle: number): void {
		const speed =
			this.movementSpeed * this.movementFactor * this.movementFactorTemp;
		this.movementAngle = angle;
		this.velocityX = (speed * Math.cos(angle)) / 1000;
		this.velocityY = (speed * Math.sin(angle)) / 1000;
	}
```

---



文档生成时间：2026/1/31 13:13:58
