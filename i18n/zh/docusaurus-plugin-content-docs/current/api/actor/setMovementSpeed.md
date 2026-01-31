---
sidebar_position: 1
title: setMovementSpeed 设置角色的移动速度
---

## setMovementSpeed

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置角色的移动速度

参数 `speed`: 移动速度(图块/秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `speed` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2201 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2201)

```typescript
public setMovementSpeed(speed: number): void {
		this.movementSpeed = speed;
		this.calculateVelocity(this.movementAngle);
	}
```

---



文档生成时间：2026/1/31 13:13:58
