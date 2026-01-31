---
sidebar_position: 1
title: move 移动角色
---

## move

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

移动角色

参数 `x`: 位移X

参数 `y`: 位移Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1049 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1049)

```typescript
public move(x: number, y: number): void {
		this.x += x;
		this.y += y;
		// 设置碰撞器为已经移动状态
		this.collider.moved = true;
		this.collider.handleImmovableCollisions();
	}
```

---



文档生成时间：2026/1/31 13:13:58
