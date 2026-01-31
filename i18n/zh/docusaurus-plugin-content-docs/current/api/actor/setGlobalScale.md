---
sidebar_position: 1
title: setGlobalScale 设置全局缩放系数
---

## setGlobalScale

**类型**: `MethodDeclaration`

**所属类**: `AnimationManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置全局缩放系数

参数 `scale`: 缩放系数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `scale` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2990 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2990)

```typescript
public setGlobalScale(scale: number): void {
		this.scale = scale;
		for (const animation of this.list) {
			animation.scale = animation.rawScale! * scale;
			animation.offsetY = animation.rawOffsetY! * scale;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
