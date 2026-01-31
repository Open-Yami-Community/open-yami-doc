---
sidebar_position: 1
title: updateAngle 更新角色的角度，并计算动画动作方向
---

## updateAngle

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

更新角色的角度，并计算动画动作方向

参数 `angle`: 弧度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `angle` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1111 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1111)

```typescript
public updateAngle(angle: number): void {
		if (this.angleFixed) return;
		angle = Math.modRadians(angle);
		// 当新的角度与当前角度不同时，计算动画方向
		// 允许存在一点角度误差，避免频繁计算动画方向
		if (Math.abs(this.angle - angle) >= 0.0001) {
			this.angle = angle;
			this.animationManager.setAngle(angle);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
