---
sidebar_position: 1
title: route 角色设置移动路线
---

## route

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

角色设置移动路线

参数 `path`: 移动路线，长度是2的整数倍

参数 `navigate`: 是否开启导航

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `path` | `MovementPath` | - | - |
| `navigate` | `boolean` | - | false |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2321 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2321)

```typescript
private route(path: MovementPath, navigate: boolean = false): void {
		if (this.mode !== "navigate") {
			this.stopMoving();
			this.mode = "navigate";
			this.actor.animationController.startMoving();
		}
		this.timeout = navigate ? 500 : -1;
		this.movementPath = path;
		// 设置更新函数为：路径移动
		this.update = this.updatePathMovement;
	}
```

---



文档生成时间：2026/1/31 13:13:58
