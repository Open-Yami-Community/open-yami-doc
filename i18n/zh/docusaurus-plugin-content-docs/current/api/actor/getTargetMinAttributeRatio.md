---
sidebar_position: 1
title: getTargetMinAttributeRatio 获取目标角色 - 最小属性比率
---

## getTargetMinAttributeRatio

**类型**: `MethodDeclaration`

**所属类**: `TargetManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

获取目标角色 - 最小属性比率

参数 `selector`: 目标角色选择器

参数 `key`: 属性键1

参数 `divisor`: 属性键2

返回值:目标池中符合条件的角色实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `selector` | `ActorSelector` | - | - |
| `key` | `string` | - | - |
| `divisor` | `string` | - | - |

### 返回值

类型: `Actor \| undefined`

目标池中符合条件的角色实例

### 源代码

**位置**: [第 5688 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5688)

```typescript
public getTargetMinAttributeRatio(
		selector: ActorSelector,
		key: string,
		divisor: string
	): Actor | undefined {
		let target: Actor | undefined;
		let weight = Infinity;
		const inspector = Actor.inspectors[selector];
		const owner = this.actor;
		const targets = this.targets;
		const length = targets.length;
		for (let i = 0; i < length; i++) {
			const actor = targets[i];
			// 检查角色关系，并找出最小属性比率的目标
			if (inspector(owner, actor)) {
				const attributes = actor.attributes;
				const a = attributes[key];
				const b = attributes[divisor];
				if (typeof a === "number" && typeof b === "number") {
					const ratio = a / b;
					if (ratio < weight) {
						target = actor;
						weight = ratio;
					}
				}
			}
		}
		return target;
	}
```

---



文档生成时间：2026/1/31 13:13:58
