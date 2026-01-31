---
sidebar_position: 1
title: activate 激活管理器中的动画
---

## activate

**类型**: `MethodDeclaration`

**所属类**: `AnimationManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

激活管理器中的动画

参数 `x`: 动画的场景X

参数 `y`: 动画的场景Y

参数 `lightX`: 反射光纹理坐标X

参数 `lightY`: 反射光纹理坐标Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `drawX` | `number` | - | - |
| `drawY` | `number` | - | - |
| `lightX` | `number` | - | - |
| `lightY` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3121 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3121)

```typescript
public activate(
		drawX: number,
		drawY: number,
		lightX: number,
		lightY: number
	): void {
		for (const animation of this.list) {
			animation.activate(drawX, drawY, lightX, lightY);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
