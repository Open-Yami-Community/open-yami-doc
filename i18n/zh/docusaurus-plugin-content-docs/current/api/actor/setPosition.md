---
sidebar_position: 1
title: setPosition 设置角色在场景中的位置
---

## setPosition

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置角色在场景中的位置

参数 `x`: 场景网格X

参数 `y`: 场景网格Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1062 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1062)

```typescript
public setPosition(x: number, y: number): void {
		this.x = x;
		this.y = y;
		this.updateGridPosition();
		// 设置碰撞器为已经移动状态
		this.collider.moved = true;
	}
```

---



文档生成时间：2026/1/31 13:13:58
