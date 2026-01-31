---
sidebar_position: 1
title: setOpacity 设置动画不透明度
---

## setOpacity

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置动画不透明度

参数 `opacity`: 不透明度[0-1]

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `opacity` | `number` | - | - |
| `easingId` | `string` | - | "" |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 910 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L910)

```typescript
public setOpacity(
		opacity: number,
		easingId: string = "",
		duration: number = 0
	): void {
		this.animation?.setOpacity(
			"actor-opacity",
			this.updaters,
			opacity,
			easingId,
			duration
		);
	}
```

---



文档生成时间：2026/1/31 13:13:58
