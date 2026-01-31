---
sidebar_position: 1
title: setOffsetYForAll 设置全部动画的垂直偏移位置
---

## setOffsetYForAll

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置全部动画的垂直偏移位置

参数 `offsetY`: 垂直偏移位置

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `offsetY` | `number` | - | - |
| `easingId` | `string` | - | "" |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 967 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L967)

```typescript
public setOffsetYForAll(
		offsetY: number,
		easingId: string = "",
		duration: number = 0
	): void {
		for (const animation of this.animationManager.list) {
			const id = animation.key + "-offsetY";
			animation.setOffsetY(id, this.updaters, offsetY, easingId, duration);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
