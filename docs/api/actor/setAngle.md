---
sidebar_position: 1
title: setAngle 设置动画角度
---

## setAngle

**类型**: `MethodDeclaration`

**所属类**: `AnimationManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置动画角度

参数 `angle`: 角度(弧度)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `angle` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3015 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3015)

```typescript
public setAngle(angle: number): void {
		for (const animation of this.list) {
			if (animation.syncAngle) {
				if (animation.playing) {
					animation.playing = false;
					animation.setAngle(angle);
					animation.playing = true;
				} else {
					animation.setAngle(angle);
				}
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
