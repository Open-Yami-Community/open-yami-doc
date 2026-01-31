---
sidebar_position: 1
title: setWeight 设置体重
---

## setWeight

**类型**: `MethodDeclaration`

**所属类**: `ActorCollider`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置体重

参数 `weight`: 碰撞器体重

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `weight` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1529 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1529)

```typescript
public setWeight(weight: number): void {
		this.weight = weight;
		// 更新角色的障碍区域
		this.actor.parent?.scene.obstacle.update(this.actor);
	}
```

---



文档生成时间：2026/1/31 13:13:58
