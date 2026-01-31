---
sidebar_position: 1
title: moveTowardAngle 角色向指定角度持续移动
---

## moveTowardAngle

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

角色向指定角度持续移动

参数 `angle`: 移动角度(弧度)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `angle` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2275 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2275)

```typescript
public moveTowardAngle(angle: number): void {
		if (this.mode !== "keep") {
			this.stopMoving();
			this.mode = "keep";
			this.actor.animationController.startMoving();
		}
		this.calculateVelocity(angle);
		// 设置更新函数为：向前移动
		this.update = this.updateForwardMovement;
	}
```

---



文档生成时间：2026/1/31 13:13:58
