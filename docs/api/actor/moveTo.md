---
sidebar_position: 1
title: moveTo 角色移动到指定位置
---

## moveTo

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

角色移动到指定位置

参数 `x`: 场景图块X

参数 `y`: 场景图块Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2291 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2291)

```typescript
public moveTo(x: number, y: number): void {
		this.route(PathFinder.createUnitPath(x, y));
	}
```

---



文档生成时间：2026/1/31 13:13:58
