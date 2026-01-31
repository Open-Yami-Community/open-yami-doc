---
sidebar_position: 1
title: setMovementFactor 设置角色的移动速度系数
---

## setMovementFactor

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置角色的移动速度系数

参数 `factor`: 移动速度系数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `factor` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2210 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2210)

```typescript
public setMovementFactor(factor: number): void {
		this.movementFactor = factor;
		this.calculateVelocity(this.movementAngle);
	}
```

---



文档生成时间：2026/1/31 13:13:58
