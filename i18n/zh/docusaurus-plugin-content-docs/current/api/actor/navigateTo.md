---
sidebar_position: 1
title: navigateTo 角色导航到指定位置
---

## navigateTo

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

角色导航到指定位置

参数 `x`: 场景图块X

参数 `y`: 场景图块Y

参数 `bypass`: 是否绕过角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |
| `bypass` | `boolean` | - | false |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2301 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2301)

```typescript
public navigateTo(x: number, y: number, bypass: boolean = false): void {
		this.bypass = bypass;
		this.route(
			PathFinder.createPath(
				this.actor.x,
				this.actor.y,
				x,
				y,
				this.actor.passage,
				bypass
			),
			true
		);
	}
```

---



文档生成时间：2026/1/31 13:13:58
